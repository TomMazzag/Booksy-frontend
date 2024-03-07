import React, { useEffect, useState } from 'react';
import { createOrderRecord } from '../../services/order';
import Navbar from '../../components/Structure/NavBar';
import Footer from '../../components/Structure/Footer';
import "./SuccessPage.css"
import { useUser } from "@clerk/clerk-react"

const OrderSuccessPage = () => {

    
    const [totalPrice, setTotalPrice] = useState(0);
    const [order, setOrder] = useState()
    const { user } = useUser();

    const urlParams = new URLSearchParams(window.location.search)
    const session_id = urlParams.get('session_id')

    const dateFormatOptions = { 
        day: '2-digit', 
        month: 'long', 
        year: 'numeric' 
    }

    const formatDate = (dateString) =>  {
        const date = new Date(dateString)
        const formattedDate = date.toLocaleString("en-GB", dateFormatOptions)
        return formattedDate
    }

    useEffect(() => {
        if (user) {
            createOrderRecord({ 
                user_id: user.id,
                session_id: session_id
            })
            .then((orderResponse) => {
                // console.log(orderResponse.order)
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

                {order ?
                <div className='order-details'>
                    <p>Your order number is {order._id}</p>
                    <p>Your ordered on the {formatDate(order.createdAt)} {}</p>
                    {order.items.map((book, index) => (
                        <div className='order-book' key={index}>
                            <p>{index + 1}</p>
                            <img src={book.product.image_url} alt="Book cover" />
                            <div className='order-book-details'>
                                <h4>{book.product.title}</h4>
                                <p className='author'>{book.product.author}</p>
                                <p>Quantity: {book.quantity}</p>
                            </div>
                            <p>£{book.product.price.$numberDecimal}</p>
                        </div>
                    ))}
                </div> 
                : 
                <div className='order-loading'>
                    <h1>Order is loading ... </h1>
                </div>
                }
            </div>
            <Footer />
        </>
    );
};

export default OrderSuccessPage;
