    //CartPage Component
    
    import React from 'react';
    import './CartPage.css'; 
    import Navbar from '../Components/Home/NavBar';
    import Footer from '../Components/Home/Footer';
    import bookImage from '../assets/book.jpeg';
    

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
            <form action="#">
                <input type="radio" id="pay" name="payment-method" value="pay" />
                <label htmlFor="pay">Pay</label><br />

                <input type="radio" id="visa" name="payment-method" value="visa" />
                <label htmlFor="visa">VISA</label><br />

                <input type="radio" id="paypal" name="payment-method" value="paypal" />
                <label htmlFor="paypal">PayPal</label><br />

                <input type="radio" id="gpay" name="payment-method" value="gpay" />
                <label htmlFor="gpay">GPay</label><br />

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

    
