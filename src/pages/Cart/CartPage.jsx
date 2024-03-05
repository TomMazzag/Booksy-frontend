    //CartPage Component
    
    import React, { useState, useEffect } from 'react';
    import './CartPage.css';
    import Navbar from '../../components/Home/NavBar';
    import Footer from '../../components/Home/Footer';
    import applePayLogo from '../../assets/Applepay.png';
    import visaMastercardLogo from '../../assets/Cardspay.png';
    import paypalLogo from '../../assets/Paypal.png';
    import gpayLogo from '../../assets/Gpay.png';
    import { getBasket } from '../../services/basket';
    import CartItem from './CartItem';
    import PaymentSummary from '../Checkout/PaymentSummary';
    
    export const CartPage = () => {
        const [basketItems, setBasketItems] = useState([]);
        const [totalPrice, setTotalPrice] = useState(0);
    
        useEffect(() => {
            const fetchBasketItems = async () => {
                try {
                    const userId = '65e07035deb88a4a513164ed'; // Replace with the actual user ID
                    const basketData = await getBasket(userId);
                    const itemsWithQuantity = basketData.basket.items.map(item => ({
                        ...item,
                        quantity: 1 // Initialize quantity if not present
                    }));
                    setBasketItems(itemsWithQuantity);
                    calculateTotal(itemsWithQuantity);
                } catch (error) {
                    console.error('Error fetching basket items:', error.message);
                }
            };
    
            fetchBasketItems();
        }, []);
    
        const handleQuantityChange = (bookId, newQuantity) => {
            const parsedQuantity = parseInt(newQuantity, 10); // Parse the new quantity as an integer
            setBasketItems(currentItems => {
                return currentItems.map(item => {
                    if (item._id === bookId) {
                        return { ...item, quantity: parsedQuantity }; // Update the quantity of the relevant item
                    }
                    return item;
                });
            });
        };
    
        useEffect(() => {
            // Recalculate total when basketItems changes
            calculateTotal(basketItems);
        }, [basketItems]);
    
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
                                <CartItem 
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
                    <PaymentSummary totalPrice={totalPrice} />
                </main>
                <Footer />
            </>
        );
    };
    
    export default CartPage;





    
    // import React from 'react';
    // import './CartPage.css';
    // import Navbar from '../../components/Home/NavBar';
    // import Footer from '../../components/Home/Footer';
    // import bookImage from '../../assets/book.jpeg';
    // import applePayLogo from '../../assets/Applepay.png'; 
    // import visaMastercardLogo from '../../assets/Cardspay.png'; 
    // import paypalLogo from '../../assets/Paypal.png'; 
    // import gpayLogo from '../../assets/Gpay.png'; 
    // import { getBasket, updateItemQuantity, removeFromBasket } from '../../services/basket';
    // import { useState, useEffect } from 'react';
    // import { getBookById } from '../../services/books';
    // import CartItem from './CartItem';


    // export const CartPage = () => {
    //         const [basketItems, setBasketItems] = useState([]);
        
    //         const [updatebasketItems, setUpdateBasketItems] = useState(false);

    //     useEffect(() => {
    //         // Fetch basket items when the component mounts
    //         const fetchBasketItems = async () => {
    //             try {
    //                 const userId = '65e07035deb88a4a513164ed'; // Replace with the actual user ID
    //                 const basketData = await getBasket(userId);
    //                 setBasketItems(basketData.basket.items);
    //                 setUpdateBasketItems(false);

    //                  // Assuming the response data has an 'items' property
    //             } catch (error) {
    //                 console.error('Error fetching basket items:', error.message);
    //             }
    //         };
    
    //         fetchBasketItems();
    //     }, [updatebasketItems]); // Empty dependency array ensures the effect runs only once
    // return (
    //     <>
    //     <Navbar />
    //     {/* Main Content Area */}
    //     <main className="cart-container">
    //         {/* Left Column: Cart Items */}
    //         {basketItems.map((item,index) => (
    //             <CartItem key={index} book={item} setUpdateBasketItems= {setUpdateBasketItems}/>
    //         ))}

            

    //         {/* Right Sidebar: Payment Summary */}
    //         <aside className="payment-summary">
    //         <h4>How you will Pay</h4>
    //         <form action="#">
    //             <label htmlFor="applePay">
    //             <input type="radio" id="applePay" name="payment-method" value="applePay" />
    //             <img src={applePayLogo} alt="Apple Pay" />
    //             </label><br />

    //             <label htmlFor="visaMastercard">
    //             <input type="radio" id="visaMastercard" name="payment-method" value="visaMastercard" />
    //             <img src={visaMastercardLogo} alt="Visa/Mastercard" />
    //             </label><br />

    //             <label htmlFor="paypal">
    //             <input type="radio" id="paypal" name="payment-method" value="paypal" />
    //             <img src={paypalLogo} alt="PayPal" />
    //             </label><br />

    //             <label htmlFor="gpay">
    //             <input type="radio" id="gpay" name="payment-method" value="gpay" />
    //             <img src={gpayLogo} alt="Google Pay" />
    //             </label><br />

    //             <p>Item(s) total: $9.99</p>
    //             <p>Delivery: $2.60</p>
    //             <p>Total: $12.59</p>
    //             <button type="submit" className="checkout-button">Check out with Pay</button>
    //         </form>
    //         </aside>
    //     </main>
    //     <Footer />
    //     </>
    // );
    // };

    // export default CartPage;










