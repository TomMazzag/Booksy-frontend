// import { loadStripe } from '@stripe/stripe-js';

// const backendUrl = "http://127.0.0.1:3000";

// // Directly load Stripe with your Stripe publishable key
// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

// export const initiateStripeCheckout = async (cartItems) => {
//   const stripe = await stripePromise;

//   try {
//     const sessionBody = {
//       products: cartItems,
//     };

//     const response = await fetch(`${backendUrl}/create-checkout-session`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(sessionBody),
//     });

//     const session = await response.json();

//     const result = await stripe.redirectToCheckout({
//       sessionId: session.id,
//     });

//     if (result.error) {
//       alert(result.error.message);
//     }
//   } catch (error) {
//     console.error('Error initiating Stripe Checkout:', error);
//     alert('Failed to initiate payment. Please try again.');
//   }
// };



// import { loadStripe } from '@stripe/stripe-js';

// // Replace with your Stripe public key
// const stripePromise = loadStripe('pk_live_51OqbjwGt14wMA3rFKLpnmCaSHo9nhU7hOmCBA9mL0A9E2NydqhfBeIGmYGeNyiAIfIlyKTTVTnZyDM0ba2psewmW008dY4LKzt');

// // Your backend endpoint for creating Stripe Checkout sessions
// const createSessionUrl = 'http://127.0.0.1:3000/stripe/create-checkout-session';

//     export const initiateStripeCheckout = async (cartItems) => {
//     try {
//         // Convert cart items to the format expected by your backend
//         const lineItems = cartItems.map(item => ({
//         priceData: { // Adjust these fields based on your cart item structure and what your backend expects
//             currency: 'gbp',
//             productData: {
//             name: item.name,
//             },
//             unitAmount: item.price * 100, // Convert price to the smallest currency unit, e.g. pence for GBP
//         },
//         quantity: item.quantity,
//         }));

//         // Call your backend to create a Stripe Checkout session
//         const response = await fetch(createSessionUrl, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ lineItems }), // Ensure the backend expects this format
//         });

//         const session = await response.json();

//         if (response.ok && session.id) {
//         const stripe = await stripePromise;
//         // Redirect to Stripe Checkout
//         const { error } = await stripe.redirectToCheckout({
//             sessionId: session.id,
//         });

//         if (error) {
//             console.error('Stripe Checkout error:', error);
//             // Handle errors here, such as showing a notification to the user
//         }
//         } else {
//         throw new Error('Failed to create Stripe Checkout session');
//         }
//     } catch (error) {
//         console.error('Error initiating Stripe Checkout:', error);
//         // Handle the error appropriately in your UI
//     }
//     };


import { loadStripe } from '@stripe/stripe-js';

// Replace with your Stripe public key
const stripePromise = loadStripe('pk_live_51OqbjwGt14wMA3rFKLpnmCaSHo9nhU7hOmCBA9mL0A9E2NydqhfBeIGmYGeNyiAIfIlyKTTVTnZyDM0ba2psewmW008dY4LKzt');

// Your backend endpoint for creating Stripe Checkout sessions
const createSessionUrl = 'http://127.0.0.1:3000/stripe/create-checkout-session';

export const initiateStripeCheckout = async (cartItems = []) => {
    console.log("Initiating Stripe Checkout with cart items:", cartItems);

    // Verify cartItems structure
    if (!Array.isArray(cartItems) || cartItems.some(item => !item.name || !item.price || typeof item.quantity !== 'number')) {
        console.error('Cart items are undefined or not an array, or items structure is incorrect.');
        return;
    }

    const stripe = await stripePromise;

    try {
        const lineItems = cartItems.map(item => {
            console.log(`Processing item: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}`);
            return {
                price_data: {
                    currency: 'gbp',
                    product_data: {
                        name: item.name,
                    },
                    unit_amount: Math.round(item.price * 100), // Ensure the price is in pence
                },
                quantity: item.quantity,
            };
        });

        console.log("Line items for Stripe Checkout:", lineItems);

        const response = await fetch(createSessionUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ lineItems }),
        });

        const session = await response.json();

        if (response.ok && session.id) {
            console.log("Stripe Checkout Session ID:", session.id);
            const { error } = await stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (error) {
                console.error('Stripe Checkout error:', error);
            }
        } else {
            throw new Error(`Failed to create Stripe Checkout session, Response status: ${response.status}, Session: ${JSON.stringify(session)}`);
        }
    } catch (error) {
        console.error('Error initiating Stripe Checkout:', error);
    }
};

