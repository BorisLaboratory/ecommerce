import db from "@/db/db";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises"; // fs === file system
// file download
export async function GET(
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const product = await db.product.findUnique({
    where: { id },
    select: { filePath: true, name: true },
  });

  if (product == null) return notFound;

  // prepare file statistics info
  const { size } = await fs.stat(product.filePath); // file size
  const file = await fs.readFile(product.filePath);
  const extension = product.filePath.split(".").pop(); // eg. pops .mp4

  return new NextResponse(file, {
    headers: {
      "Content-Disposition": `attachment; filename="${product.name}.${extension}"`,
      "Content-Length": size.toString(), // so the browser can inform the customer how large the file is
    },
  });
}
