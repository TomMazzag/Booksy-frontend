// src/Components/Structure/Footer.jsx

import "./Footer.css";

    const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-content">
            <div className="footer-section">
            <h5>Shop</h5>
            <ul>
                <li>Books</li>
                <li>eBooks</li>
                <li>AudioBooks</li>
            </ul>
            </div>
            <div className="footer-section">
            <h5>About</h5>
            <ul>
                <li>Our Story</li>
                <li>Careers</li>
                <li>Press</li>
            </ul>
            </div>
            <div className="footer-section">
            <h5>Help</h5>
            <ul>
                <li>Contact</li>
                <li>Support</li>
                <li>FAQs</li>
            </ul>
            </div>
            <div className="footer-section">
            <h5>Follow Us</h5>
            <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Booksy. All rights reserved.</p>
        </div>
        </footer>
    );
    };

    export default Footer;

