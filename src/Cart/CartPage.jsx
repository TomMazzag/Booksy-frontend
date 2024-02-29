    //CartPage Component
    

    import React from 'react';
    import './CartPage.css';
    import Navbar from '../components/Home/NavBar';
    import Footer from '../components/Home/Footer';
    import bookImage from '../assets/book.jpeg';
    import applePayLogo from '../assets/Applepay.png'; // Replace with actual path to logo
    import visaMastercardLogo from '../assets/Cardspay.png'; // Replace with actual path to logo
    import paypalLogo from '../assets/Paypal.png'; // Replace with actual path to logo
    import gpayLogo from '../assets/Gpay.png'; // Replace with actual path to logo

    export const CartPage = () => {
    return (
        <>
        <Navbar />
        {/* Main Content Area */}
        <main className="cart-container">
            {/* Left Column: Cart Items */}
            <section className="cart-items">
            {/* Single Cart Item */}
            <article className="cart-item">
                <img src={bookImage} alt="Book Image" />
                <div className="item-details">
                <h3>Maurice and Maralyn: A Whale, a Shipwreck, a Love Story (Hardback)</h3>
                <p>Price: $9.99</p>
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
                <button className="save-for-later">Save for later</button>
                <button className="remove-item">Remove</button>
                </div>
                <div className="delivery-info">
                <p>Delivery: $2.60</p>
                <p>Estimated delivery: 29 Feb - 06 Mar</p>
                </div>
            </article>
            </section>

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







 