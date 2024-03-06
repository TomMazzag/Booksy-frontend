import React, { useEffect } from 'react';
import { createOrderRecord } from '../../services/order';
import Navbar from '../../components/Home/NavBar';
import Footer from '../../components/Home/Footer';

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
        <>
            <Navbar />
            <div>
                <h1>Payment Successful!</h1>
                <p>Your order is being processed.</p>

            </div>
            <Footer />
        </>
    );
};

export default OrderSuccessPage;
