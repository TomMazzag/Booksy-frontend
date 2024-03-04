import React from 'react';
import applePayLogo from '../../assets/Applepay.png';
import visaMastercardLogo from '../../assets/Cardspay.png';
import paypalLogo from '../../assets/Paypal.png';
import gpayLogo from '../../assets/Gpay.png';

const PaymentSummary = ({ totalPrice }) => {
    return (
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

                <p>Item(s) total: £{totalPrice.toFixed(2)}</p>
                <p>Delivery: £2.60</p>
                <p>Total: £{(totalPrice + 2.6).toFixed(2)}</p>
                <button type="submit" className="checkout-button">Check out with Pay</button>
            </form>
        </aside>
    );
};

export default PaymentSummary;
