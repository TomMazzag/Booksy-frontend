import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const OrderCancelPage = () => {
    return (
        <div>
            <h1>Payment Canceled</h1>
            <p>We noticed that you didn't complete your payment. If you encountered any issues or have any questions, feel free to contact us.</p>
            <p>You can return to your basket to try again or continue browsing:</p>
            <div>
                <Link to="/basket">Return to Basket</Link>
                <br />
                <Link to="/">Continue Browsing</Link>
            </div>
        </div>
    );
};

export default OrderCancelPage;
