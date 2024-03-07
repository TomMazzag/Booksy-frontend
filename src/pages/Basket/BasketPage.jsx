    //BasketPage Component
    
    import React, { useState, useEffect } from 'react';
    import './BasketPage.css';
    import Navbar from '../../components/Structure/NavBar';
    import Footer from '../../components/Structure/Footer';
    import { getBasket } from '../../services/basket';
    import BasketItem from '../../components/Basket/BasketItem';
    import PaymentSummary from '../Checkout/PaymentSummary';
    import { useUser } from '@clerk/clerk-react';

    export const BasketPage = () => {
        const [basketItems, setBasketItems] = useState([]);
        const [totalPrice, setTotalPrice] = useState(0);
        const { user } = useUser();
    
        useEffect(() => {
            const fetchBasketItems = async () => {
                if (user){
                    try {
                        const userId = user.id; // Replace with the actual user ID
                        const basketData = await getBasket(userId);
                        const itemsWithQuantity = basketData.basket.items.map(item => ({
                            ...item,
                            quantity: 1 // Initialize quantity if not present
                        }));
                        // console.log("123:", basketData.basket.items)
                        setBasketItems(basketData.basket.items);
                        calculateTotal(itemsWithQuantity);
                    } catch (error) {
                        console.error('Error fetching basket items:', error.message);
                    }}
            };
            fetchBasketItems();
        }, [user]);

        const handleQuantityChange = (bookId, newQuantity) => {
            const parsedQuantity = parseInt(newQuantity, 10); // Parse the new quantity as an integer
            setBasketItems(currentItems => {
                // console.log("currentItems:", currentItems)
                return currentItems.map(item => {
                    if (item._id === bookId) {
                        return { ...item, quantity: parsedQuantity }; // Update the quantity of the relevant item
                    }
                    return item;
                });
            });
        };
    
        const calculateTotal = (items) => {
            const total = items.reduce((acc, item) => {
                return acc + (parseFloat(item.price.$numberDecimal) * (item.quantity || 1));
            }, 0);
            setTotalPrice(total);
        };
    
        return (
            <>
                <Navbar />
                <main className="cart-container">
                    <div className="cart-items">
                        {basketItems.length > 0 ? (
                            basketItems.map((item, index) => (
                                <BasketItem 
                                    user={user}
                                    key={index} 
                                    book={item} 
                                    setUpdateBasketItems={() => setBasketItems(prevItems => prevItems.filter(b => b._id !== item._id))}
                                    onQuantityChange={handleQuantityChange} 
                                />
                            ))
                        ) : (
                            <div className="empty-basket-message">Your Basket is Empty, Fill it please!</div>
                        )}
                    </div>
                    <PaymentSummary totalPrice={totalPrice} cartItems={basketItems}/>
                </main>
                <Footer />
            </>
        );
    };
    
    export default BasketPage;