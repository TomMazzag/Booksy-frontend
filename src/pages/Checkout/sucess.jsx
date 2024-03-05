import React, { useEffect } from 'react';
import { createOrderRecord } from '../../services/order';

const OrderSuccessPage = () => {
    useEffect(() => {
        // Fetch session details from URL or state management
        const orderDetails = {
            // Fill with actual order details (e.g., items, user info, total amount)
        };

        createOrderRecord(orderDetails).then(response => {
            console.log('Order record created:', response);
            // Further actions like redirecting to an order confirmation page
        }).catch(error => {
            console.error('Failed to create order record:', error);
        });
    }, []);

    return (
        <div>
            <h1>Payment Successful!</h1>
            <p>Your order is being processed.</p>
            {/* Additional content as needed */}
        </div>
    );
};

export default OrderSuccessPage;
