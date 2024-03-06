// import React from 'react';
// import applePayLogo from '../../assets/Applepay.png';
// import visaMastercardLogo from '../../assets/Cardspay.png';
// import paypalLogo from '../../assets/Paypal.png';
// import gpayLogo from '../../assets/Gpay.png';
// import { loadStripe } from '@stripe/stripe-js';
// import { faCarTunnel } from '@fortawesome/free-solid-svg-icons';






// const PaymentSummary = ({ totalPrice }) => {
//     return (
//         <aside className="payment-summary">
//             <h4>How you will Pay</h4>
//             <form action="#">
//                 <label htmlFor="applePay">
//                     <input type="radio" id="applePay" name="payment-method" value="applePay" />
//                     <img src={applePayLogo} alt="Apple Pay" />
//                 </label><br />

//                 <label htmlFor="visaMastercard">
//                     <input type="radio" id="visaMastercard" name="payment-method" value="visaMastercard" />
//                     <img src={visaMastercardLogo} alt="Visa/Mastercard" />
//                 </label><br />

//                 <label htmlFor="paypal">
//                     <input type="radio" id="paypal" name="payment-method" value="paypal" />
//                     <img src={paypalLogo} alt="PayPal" />
//                 </label><br />

//                 <label htmlFor="gpay">
//                     <input type="radio" id="gpay" name="payment-method" value="gpay" />
//                     <img src={gpayLogo} alt="Google Pay" />
//                 </label><br />

//                 <p>Item(s) total: £{totalPrice.toFixed(2)}</p>
//                 <p>Delivery: £2.60</p>
//                 <p>Total: £{(totalPrice + 2.6).toFixed(2)}</p>
//                 <button onlick={makepayment} type="submit" className="checkout-button">Check out with Pay</button>
//             </form>
//         </aside>
//     );
// };

// export default PaymentSummary;




import React from 'react';
import { initiateStripeCheckout } from '../../services/stripeService'; // Import the checkout function

// Optional: Import payment method logos if you want to display them
import applePayLogo from '../../assets/Applepay.png';
import visaMastercardLogo from '../../assets/Cardspay.png';
import paypalLogo from '../../assets/Paypal.png';
import gpayLogo from '../../assets/Gpay.png';
import './PaymentSummary.css';
import { initiateOrderAndCheckout } from '../../services/orderService';

    const PaymentSummary = ({ totalPrice, cartItems }) => {

    const priceAndQuantity = cartItems.map(item => {
        var { price, title } = item;
        const numericPrice = parseFloat(price.$numberDecimal);
        price = numericPrice * 100
        return { 
            price_data: {
                currency: "gbp",
                unit_amount: price,
                product_data: {
                    name: title
                }
            },
            quantity: 1
        };
    })

    const handleCheckout = () => {
        
        initiateOrderAndCheckout(priceAndQuantity); // Trigger Stripe Checkout with the current cart items
    };


    return (
        <aside className="payment-summary">
        <h5>Payment Summary</h5>
        {/* Display payment method logos if desired */}
        {/* <div className="payment-methods">
            <img src={applePayLogo} alt="Apple Pay" />
            <img src={visaMastercardLogo} alt="Visa/Mastercard" />
            <img src={paypalLogo} alt="PayPal" />
            <img src={gpayLogo} alt="Google Pay" />
        </div> */}

        {/* Payment summary details */}
        <p>Item(s) total: £{totalPrice.toFixed(2)}</p>
        <p>Delivery: £2.60</p> {/* Adjust delivery fee as needed */}
        <p>Total: £{(totalPrice + 2.6).toFixed(2)}</p> {/* Calculate total price including delivery */}

        {/* Checkout button */}
        <button onClick={handleCheckout} className="checkout-button">Check out</button>
        </aside>
    );
    };

    export default PaymentSummary;



