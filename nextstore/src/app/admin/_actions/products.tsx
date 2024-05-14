"use server";

import db from "@/db/db";
import { z } from "zod";
import fs from "fs/promises";
import { redirect } from "next/navigation";
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
      name: data.name,
      description: data.description,
      priceIncents: data.priceInCents,
      filePath,
      imagePath,
    },
  });

  // after creating product, redirect to product page:
  redirect("/admin/products");
}
