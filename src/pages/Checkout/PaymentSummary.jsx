import React from 'react';

// Optional: Import payment method logos if you want to display them
import applePayLogo from '../../assets/Applepay.png';
import visaMastercardLogo from '../../assets/Cardspay.png';
import paypalLogo from '../../assets/Paypal.png';
import gpayLogo from '../../assets/Gpay.png';
import './PaymentSummary.css';
import { initiateOrderAndCheckout } from '../../services/stripe';

    const PaymentSummary = ({ totalPrice, cartItems }) => {

    const priceAndQuantity = cartItems.map(item => {
        var { price, title } = item;
        const numericPrice = parseFloat(price.$numberDecimal);
        price = numericPrice * 100
        return { 
            price_data: {
                currency: "gbp",
                unit_amount: price,
                product_data: {
                    name: title
                }
            },
            quantity: 1
        };
    })

    const handleCheckout = () => {
        
        initiateOrderAndCheckout(priceAndQuantity); // Trigger Stripe Checkout with the current cart items
    };


    return (
        <aside className="payment-summary">
        <h5>Payment Summary</h5>

        {/* Payment summary details */}
        <p>Item(s) total: £{totalPrice.toFixed(2)}</p>
        <p>Delivery: £2.60</p> {/* Adjust delivery fee as needed */}
        <p>Total: £{(totalPrice + 2.6).toFixed(2)}</p> {/* Calculate total price including delivery */}

        {/* Checkout button */}
        <button onClick={handleCheckout} className="checkout-button">Check out</button>
        </aside>
    );
    };

    export default PaymentSummary;