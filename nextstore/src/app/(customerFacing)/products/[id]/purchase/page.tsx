import db from "@/db/db";
import { notFound } from "next/navigation";
import Stripe from "stripe";
import { Product } from "@prisma/client";
import CheckoutForm from "./_components/CheckoutForm";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string); // cast to string
{
}

export default async function PurchasePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await db.product.findUnique({ where: { id } });
  if (product == null) return notFound();

  // tell stripe about a customer's intent to make payment for a product:
  const paymentIntent = await stripe.paymentIntents.create({
    amount: product.priceInCents,
    currency: "USD",
    // payment_method_types: ["card"],
    // confirm: true,
    // success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/purchase/success`,
    // cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/purchase/cancel`,

    // tie this purchase intent to the particular product for the customer:
    metadata: {
      product_id: product.id,
    },
  });

  // must important content of the paymentIntent created by stripe is the Client secret key
  // which is used by the our client as paymentIntent_ID ,to make the payment:
  //
  const ourClientSecret = paymentIntent.client_secret;
  if (ourClientSecret == null) {
    // we have some problem
    throw Error("Stripe failed to create payment intent");
  }

  return <CheckoutForm product={product} clientSecret={ourClientSecret} />;
}
