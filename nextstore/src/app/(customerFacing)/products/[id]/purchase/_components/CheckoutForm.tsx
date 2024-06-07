"use client";
import Image from "next/image";
import {
  Elements,
  LinkAuthenticationElement,
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
import { FormEvent, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  //
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (stripe == null || elements == null) return;
    //
    setIsLoading(true);
    // Customer can only buy this product once
    // check if order already exist:

    stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/stripe/purchase-success`,
        },
      })
      .then(({ error }) => {
        if (error.type === "card_error" || error.type === "validation_error") {
          setErrorMessage(error.message);
        } else {
          setErrorMessage("unknown error has occurred");
        }
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle> Checkout</CardTitle>
          {errorMessage && (
            <CardDescription className="text-destructive">
              {errorMessage}
            </CardDescription>
          )}
        </CardHeader>
      </Card>
      <CardContent>
        <PaymentElement />
        {/* add email field : */}
        <div className="mt-4">
          <LinkAuthenticationElement />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={stripe == null || elements == null || isLoading}
        >
          {isLoading
            ? "Purchasing..."
            : `Buy-${formatCurrency(priceInCents / 100)}`}
        </Button>
      </CardFooter>
    </form>
  );
}
