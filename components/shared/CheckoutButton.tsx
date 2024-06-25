"use client";
import React,{useEffect} from "react";
import { Button } from "../ui/button";
import { useUser } from "@clerk/nextjs";
import { loadStripe } from "@stripe/stripe-js";
import { checkoutOrder } from "@/lib/actions/order.actions";

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutButton = () => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  const onCheckout = async () => {
   const order = {
    price: "13$",
    buyerId: userId
   }

   await checkoutOrder(order);
  };

  return (
    <form action={onCheckout} method="POST">
      <div className="flex items-center gap">
        <Button type="submit" role="link" size="lg" className="button sm:w-fit">
          Checkout
        </Button>
      </div>
    </form>
  );
};

export default CheckoutButton;
