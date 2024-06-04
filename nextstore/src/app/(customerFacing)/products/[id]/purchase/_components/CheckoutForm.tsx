"use client";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
//
type CheckoutFormProps = {
  product: {};
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
    <Elements options={{ clientSecret }} stripe={stripePromise}>
      <Form />
    </Elements>
  );
}

function Form() {
  const stripe = useStripe(); // stripe instance to use
  const elements = useElements(); // contains details of payment and email
  return <PaymentElement />;
}
