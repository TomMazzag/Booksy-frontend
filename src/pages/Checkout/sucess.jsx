import React, { useEffect, useState } from 'react';
import { createOrderRecord } from '../../services/order';
import Navbar from '../../components/Home/NavBar';
import Footer from '../../components/Home/Footer';
import "./SuccessPage.css"
import { useUser } from "@clerk/clerk-react"

const OrderSuccessPage = () => {

    
    const [totalPrice, setTotalPrice] = useState(0);
    const [order, setOrder] = useState()
    const { user } = useUser();

    const urlParams = new URLSearchParams(window.location.search)
    const session_id = urlParams.get('session_id')

    useEffect(() => {
        if (user) {
            createOrderRecord({ 
                user_id: user.id,
                session_id: session_id
            })
            .then((orderResponse) => {
                console.log(orderResponse.order)
                setOrder(orderResponse.order)
            })
        }
    }, [user]);

    return (
        <>
            <Navbar />
            <div className='success-page-content'>
                <h1>Payment Successful!</h1>
                <p>Your order is being processed.</p>

                <div className='order-details'>
                    <p>Your order number is {order._id}</p>
                    <p>Your ordered on the {order.createdAt} {}</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default OrderSuccessPage;
