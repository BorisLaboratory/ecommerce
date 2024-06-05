"use client";
import Image from "next/image";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { formatCurrency } from "@/lib/formatters";

import { PrismaClient } from "@prisma/client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
//
type CheckoutFormProps = {
  product: {
    imagePath: string;
    name: string;
    priceInCents: number;
    description: string;
  };
  clientSecret: string;
};
//
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
); // cast to string to avoid eslint error
export default function CheckoutForm({
  product,
  clientSecret,
}: CheckoutFormProps) {
  //Element context
  return (
    <>
      <div className="max-w-5xl w-full mx-auto space-y-8">
        <div className="flex gap-w4 items-center">
          <div className="aspect-video flex-shrink-0 w-1/3 relative">
            <Image
              src={product.imagePath}
              fill
              alt={product.name}
              className="object-cover"
            />
          </div>
          <div className="mx-5">
            <div className="text-lg">
              {formatCurrency(product.priceInCents / 100)}
            </div>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <div className="line-clamp-3 text-muted-foreground">
              {product.description}
            </div>
          </div>
        </div>
        <Elements options={{ clientSecret }} stripe={stripePromise}>
          <Form priceInCents={product.priceInCents} />
          {/*  try more Elements options to further customize the checkoutForm */}
        </Elements>
      </div>
    </>
  );
}

function Form({ priceInCents }: { priceInCents: number }) {
  const stripe = useStripe(); // stripe instance to use
  const elements = useElements(); // contains details of payment and email
  return (
    <form>
      <Card>
        <CardHeader>
          <CardTitle> Checkout</CardTitle>
          <CardDescription className="text-destructive">Error</CardDescription>
        </CardHeader>
      </Card>
      <CardContent>
        <PaymentElement />
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          size="lg"
          disabled={stripe == null || elements == null}
        >
          Buy - {formatCurrency(priceInCents / 100)}
        </Button>
      </CardFooter>
    </form>
  );
}
