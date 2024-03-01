    //CartPage Component
    

    import React from 'react';
    import './CartPage.css';
    import Navbar from '../../components/Home/NavBar';
    import Footer from '../../components/Home/Footer';
    import bookImage from '../../assets/book.jpeg';
    import applePayLogo from '../../assets/Applepay.png'; 
    import visaMastercardLogo from '../../assets/Cardspay.png'; 
    import paypalLogo from '../../assets/Paypal.png'; 
    import gpayLogo from '../../assets/Gpay.png'; 
    import { getBasket, updateItemQuantity, removeFromBasket } from '../../services/basket';
    import { useState, useEffect } from 'react';
    import { getBookById } from '../../services/books';
    import CartItem from '../../components/Cart/CartItem';


    export const CartPage = () => {
            const [basketItems, setBasketItems] = useState([]);
        
            const [updatebasketItems, setUpdateBasketItems] = useState(false);

        useEffect(() => {
            // Fetch basket items when the component mounts
            const fetchBasketItems = async () => {
                try {
                    const userId = '65e07035deb88a4a513164ed'; // Replace with the actual user ID
                    const basketData = await getBasket(userId);
                    setBasketItems(basketData.basket.items);
                    setUpdateBasketItems(false);

                     // Assuming the response data has an 'items' property
                } catch (error) {
                    console.error('Error fetching basket items:', error.message);
                }
            };
    
            fetchBasketItems();
        }, [updatebasketItems]); // Empty dependency array ensures the effect runs only once
    return (
        <>
        <Navbar />
        {/* Main Content Area */}
        <main className="cart-container">
            {/* Left Column: Cart Items */}
            {basketItems.map((item,index) => (
                <CartItem key={index} book={item} setUpdateBasketItems= {setUpdateBasketItems}/>
            ))}

            

            {/* Right Sidebar: Payment Summary */}
            <aside className="payment-summary">
            <h4>How you will Pay</h4>
            <form action="#">
                <label htmlFor="applePay">
                <input type="radio" id="applePay" name="payment-method" value="applePay" />
                <img src={applePayLogo} alt="Apple Pay" />
                </label><br />

                <label htmlFor="visaMastercard">
                <input type="radio" id="visaMastercard" name="payment-method" value="visaMastercard" />
                <img src={visaMastercardLogo} alt="Visa/Mastercard" />
                </label><br />

                <label htmlFor="paypal">
                <input type="radio" id="paypal" name="payment-method" value="paypal" />
                <img src={paypalLogo} alt="PayPal" />
                </label><br />

                <label htmlFor="gpay">
                <input type="radio" id="gpay" name="payment-method" value="gpay" />
                <img src={gpayLogo} alt="Google Pay" />
                </label><br />

                <p>Item(s) total: $9.99</p>
                <p>Delivery: $2.60</p>
                <p>Total: $12.59</p>
                <button type="submit" className="checkout-button">Check out with Pay</button>
            </form>
            </aside>
        </main>
        <Footer />
        </>
    );
    };

    export default CartPage;


// const CartPage = () => {
    //     const [basketItems, setBasketItems] = useState([]);
    
    //     useEffect(() => {
    //         // Fetch basket items when the component mounts
    //         const fetchBasketItems = async () => {
    //             try {
    //                 const userId = '123'; // Replace with the actual user ID
    //                 const basketData = await getBasket(userId);
    //                 setBasketItems(basketData.items); // Assuming the response data has an 'items' property
    //             } catch (error) {
    //                 console.error('Error fetching basket items:', error.message);
    //             }
    //         };
    
    //         fetchBasketItems();
    //     }, []); // Empty dependency array ensures the effect runs only once
    
    //     const handleQuantityUpdate = async (itemId, newQuantity) => {
    //         try {
    //             const userId = '123'; // Replace with the actual user ID
    //             await updateItemQuantity(userId, itemId, newQuantity);
    //             // Refresh basket items after updating quantity
    //             const basketData = await getBasket(userId);
    //             setBasketItems(basketData.items);
    //         } catch (error) {
    //             console.error('Error updating item quantity:', error.message);
    //         }
    //     };
    
    //     const handleItemRemoval = async (itemId) => {
    //         try {
    //             const userId = '123'; // Replace with the actual user ID
    //             await removeFromBasket(userId, itemId);
    //             // Refresh basket items after removing item
    //             const basketData = await getBasket(userId);
    //             setBasketItems(basketData.items);
    //         } catch (error) {
    //             console.error('Error removing item from basket:', error.message);
    //         }
    //     };
    
    //     return (
            // <>
            // <Navbar />




//  {/* Main Content Area */}
//  <main className="cart-container">
//  {/* Left Column: Cart Items */}
//  <section className="cart-items">
//      {/* Display basket items */}
//      {basketItems.map(item => (
//          <article key={item.id} className="cart-item">
//              <img src={item.imageUrl} alt={item.title} />
//              <div className="item-details">
//                  <h3>{item.title}</h3>
//                  <p>Price: ${item.price}</p>
//                  <label htmlFor="quantity">Quantity:</label>
//                  <input
//                      type="number"
//                      id="quantity"
//                      name="quantity"
//                      min="1"
//                      defaultValue={item.quantity}
//                      onChange={(e) => handleQuantityUpdate(item.id, e.target.value)}
//                  />
//                  <button className="save-for-later">Save for later</button>
//                  <button className="remove-item" onClick={() => handleItemRemoval(item.id)}>Remove</button>
//              </div>
//              <div className="delivery-info">
//                  <p>Delivery: ${item.deliveryCost}</p>
//                  <p>Estimated delivery: {item.estimatedDelivery}</p>
//              </div>
//          </article>
//      ))}
//  </section>