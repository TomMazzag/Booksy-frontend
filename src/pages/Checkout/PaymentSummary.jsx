import React, { useState } from 'react';

import './PaymentSummary.css';
import { initiateOrderAndCheckout } from '../../services/stripe';

const PaymentSummary = ({ totalPrice, cartItems }) => {

    const [disableCheckout, setDisableCheckout] = useState(true)

    useState(() => {
        if (cartItems) {
            setDisableCheckout(false)
        }
    }, [cartItems])

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
        {cartItems > 0 &&
        <>
            <p>Delivery: £2.60</p> 
            <p>Total: £{(totalPrice + 2.6).toFixed(2)}</p>
        </>}

        
        <button onClick={handleCheckout} className="checkout-button" disabled={disableCheckout}>Check out</button>

        </aside>
    );
};

export default PaymentSummary;