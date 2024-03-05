const backendUrl = "http://127.0.0.1:3000"; // Your backend URL

export const initiateOrderAndCheckout = async (cartItems) => {
    const stripe = await loadStripe('pk_live_51OqbjwGt14wMA3rFKLpnmCaSHo9nhU7hOmCBA9mL0A9E2NydqhfBeIGmYGeNyiAIfIlyKTTVTnZyDM0ba2psewmW008dY4LKzt');

    // Make an API call to your backend to create an order and initiate a Stripe Checkout session
    const response = await fetch(`${backendUrl}/api/orders/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartItems })
    });

    const { sessionId } = await response.json();

    // Redirect to Stripe Checkout using the session ID
    const result = await stripe.redirectToCheckout({ sessionId });

    if (result.error) {
        console.error('Stripe Checkout error:', result.error.message);
    }
};