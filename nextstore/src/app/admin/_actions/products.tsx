"use server";

import db from "@/db/db";
import { z } from "zod";
import fs from "fs/promises"; // fs === file system
import { notFound, redirect } from "next/navigation";
// zod validation
const fileSchema = z.instanceof(File, { message: "Required" });
const imageSchema = fileSchema.refine(
  (file) => file.size === 0 || file.type.startsWith("image/")
);
//
const addSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  priceInCents: z.coerce.number().int().min(0),
  file: fileSchema.refine((file) => file.size > 0, "Required"),
  image: fileSchema.refine((file) => file.size > 0, "Required"),
});
export async function updateProduct(
  id: string,
  prevState: unknown,
  formData: FormData
) {
  const result = editSchema.safeParse(Object.fromEntries(formData.entries()));

  //  if validation fails, return the errors
  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }
  // when success is true, we can use the data
  const data = result.data;
  const product = await db.product.findUnique({ where: { id } });

  if (product == null) return notFound();

  let filePath = product.filePath; // old file path
  if (data.file != null && data.file.size > 0) {
    // pass a file
    await fs.unlink(product.filePath); // delete the old file
    filePath = `products/${crypto.randomUUID()}-${data.file.name}`; // save the new file path
    await fs.writeFile(filePath, Buffer.from(await data.file.arrayBuffer())); // save the new file
  }

  let imagePath = product.imagePath; // default image path
  if (data.image != null && data.image.size > 0) {
    // pass a file
    await fs.unlink(`public${product.imagePath}`); // delete the old inage
    imagePath = `/products/${crypto.randomUUID()}-${data.image.name}`; // save the new image path
    await fs.writeFile(
      `public${imagePath}`,
      Buffer.from(await data.image.arrayBuffer())
    ); // save the new file
  }

  // update product
  await db.product.update({
    where: { id },
    data: {
      name: data.name,
      description: data.description,
      priceInCents: data.priceInCents,
      filePath,
      imagePath,
    },
  });

  // after updating product, redirect to product page:
  redirect("/admin/products");
}

const editSchema = addSchema.extend({
  file: fileSchema.optional(),
  image: imageSchema.optional(),
});
// actions must be async
export async function addProduct(prevState: unknown, formData: FormData) {
  const result = addSchema.safeParse(Object.fromEntries(formData.entries()));

  //  if validation fails, return the errors
  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }
  // when success is true, we can use the data
  const data = result.data;

  //create a download path for our customer to download the purchased product
  await fs.mkdir("products", { recursive: true });
  const filePath = `products/${crypto.randomUUID()}-${data.file.name}`;

  // convert our product file to a buffer and write it to our file path
  await fs.writeFile(filePath, Buffer.from(await data.file.arrayBuffer()));
  //

  // image
  await fs.mkdir("public/products", { recursive: true });
  const imagePath = `/products/${crypto.randomUUID()}-${data.image.name}`;
  await fs.writeFile(
    `public${imagePath}`,
    Buffer.from(await data.image.arrayBuffer())
  );

  // create product
  await db.product.create({
    data: {
      isAvailableForPurchase: false,
      name: data.name,
      description: data.description,
      priceInCents: data.priceInCents,
      filePath,
      imagePath,
    },
  });

  // after creating product, redirect to product page:
  redirect("/admin/products");
}

export async function toggleProductAvailability(
  id: string,
  isAvailableForPurchase: boolean
) {
  await db.product.update({ where: { id }, data: { isAvailableForPurchase } });
}

export async function deleteProduct(id: string) {
  const product = await db.product.delete({ where: { id } }); // where productId =id, and returns the deleted product
  if (product == null) return notFound();
  // delete files of the product too:
  await fs.unlink(product.filePath);
  await fs.unlink(`public${product.imagePath}`);
}
