"use server";
import db from "@/db/db";
import { Product } from "@prisma/client";

export async function userOrderExists(email: string, productId: string) {
  return (
    // if query result is not null then the order  exist:
    (await db.order.findFirst({
      where: { user: { email }, productId },
      select: { id: true },
    })) != null
  );
}
