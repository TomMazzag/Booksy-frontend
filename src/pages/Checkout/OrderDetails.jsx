OrderDetails.js
    import React from 'react';
    import { initiateStripeCheckout } from './stripeService'; // Make sure to create this service

    function OrderDetails({ order }) {
    const handleCheckout = async () => {
        await initiateStripeCheckout(order._id);
    };

    return (
        <div>
        <h2>Order Summary</h2>
        <ul>
            {order.items.map((item, index) => (
            <li key={index}>
                Item: {item.book.title}, Quantity: {item.quantity}
            </li>
            ))}
        </ul>
        <p>Total Amount: £{order.totalAmount}</p>
        <p>Shipping Address: {`${order.shippingAddress.street}, ${order.shippingAddress.city}, ${order.shippingAddress.postCode}, ${order.shippingAddress.country}`}</p>
        <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
    );
    }

    export default OrderDetails;

