const backendUrl = "https://booksy-backend.onrender.com"; // Your backend URL
//const backendUrl  = "http://127.0.0.1:3000"

import {loadStripe} from '@stripe/stripe-js';

export const initiateOrderAndCheckout = async (lineItems) => {
    const stripe = await loadStripe('pk_test_51OqbjwGt14wMA3rFSNS7g1LTtHpPrLTiX1OP1X05WVoXcyHMzKBBwBYEmprlFNJxwbrTyrgw0WKUw2KR0cQ7MqmR00SnvLiEIB');

    // Make an API call to your backend to create an order and initiate a Stripe Checkout session
    const response = await fetch(`${backendUrl}/stripe/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lineItems })
    });

    const { sessionId } = await response.json();

    // Redirect to Stripe Checkout using the session ID
    const result = await stripe.redirectToCheckout({ sessionId });

    if (result.error) {
        console.error('Stripe Checkout error:', result.error.message);
    }
};