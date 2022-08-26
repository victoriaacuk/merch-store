import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51LYN9QJhU8yXHR7xYOd4gBgNmITvUjqvZKqNCf4fEopNfeQ3oEGzfi1N6hICkkXJa0J5RbvgIN0TFOQ5yZP2NE9900YsSvxCcM";
const stripeTestPromise = loadStripe(PUBLIC_KEY);
const StripeContainer = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default StripeContainer;