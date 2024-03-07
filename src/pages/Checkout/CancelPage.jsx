// import React from 'react';
// import { Link } from 'react-router-dom';
// import NavBar from '../../components/Home/NavBar';
// import Footer from '../../components/Home/Footer';

// const OrderCancelPage = () => {
//     return (
//         <>
//             <NavBar />
//             <div>
//                 <h1>Payment Canceled</h1>
//                 <p>We noticed that you didn't complete your payment. If you encountered any issues or have any questions, feel free to contact us.</p>
//                 <p>You can return to your basket to try again or continue browsing:</p>
//                 <div>
//                     <Link to="/basket">Return to Basket</Link>
//                     <br />
//                     <Link to="/">Continue Browsing</Link>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default OrderCancelPage;



import React from 'react';
import { Link } from 'react-router-dom';
import './cancelPage.css';
import NavBar from '../../Structure//NavBar';
import Footer from '../../Structure/Home/Footer';

const OrderCancelPage = () => {
    return (
        <div className="page-container">
            <NavBar />
            <div className="content-wrap">
                <div className="payment-cancellation-container">
                    <h1>Payment Canceled</h1>
                    <p>We noticed that you didn't complete your payment. If you encountered any issues or have any questions, feel free to contact us.</p>
                    <p>You can return to your basket to try again or continue browsing:</p>
                    <Link to="/basket" className="payment-cancellation-button">Return to Basket</Link>
                    <Link to="/" className="payment-cancellation-button">Continue Browsing</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OrderCancelPage;
