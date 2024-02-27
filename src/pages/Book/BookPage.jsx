import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBasket, faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './BookPage.css';

const BookPage = () => {
    const navigate = useNavigate();

    return (
        <>
        {/* Top Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">BookStore</a>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">Categories</li>
                <li className="nav-item">
                <input type="search" placeholder="Search books..." className="form-control" />
                </li>
                <li className="nav-item">Sign In</li>
                <li className="nav-item">Profile</li>
                <li className="nav-item">
                <button className="btn btn-outline-danger">
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                </li>
                <li className="nav-item">
                <FontAwesomeIcon icon={faShoppingBasket} />
                </li>
            </ul>
            </div>
        </nav>

        {/* Book Content */}
        {/* Go back button */}
        <Link to="/" className='go_back_button'>Go Back</Link>
        <div className="container mt-4 centered-content">
            <div className="row">
            {/* Book Image */}
            <div className="col-md-4">
                <img src="public/foundation1.jpg" alt="Book" className="img-fluid" />
            </div>

            {/* Book Details */}
            <div className="col-md-5">
                <h2>Book Title</h2>
                <p>Author: Author Name</p>
                <p>Rating: <FontAwesomeIcon icon={faStar} /> 4.5</p>
                <p>Price: $Price</p>
                <p>Status: In Stock</p>
                <button className="btn btn-outline-danger">
                <FontAwesomeIcon icon={faHeart} /> Add to Favourites
                </button>
            </div>
            </div>

            {/* Book Description */}
            <div className="row">
            <div className="col-md-10 offset-md-1 mt-4">
                <p>There are only a few series in the world of science fiction that enjoy such respect and enduring popularity as Isaac Asimov’s Foundation series. In fact, the only series that I can properly compare it to is Frank Herbert’s Dune series. There are many similarities, which I will go into in due time. For now, I’ll just say that I come to this series as a new reader (I have read it in my teenage years but have forgotten almost everything about it) and I am curious as to why the Hugo Awards chose this series for their one-time award for Best All-Time Series in the History of Forever. It seems like an odd choice and I am sceptical. These Foundation novels are very short novels, especially the first trilogy, with hardly any room for development of characters and plot.</p>
            </div>
            </div>

            {/* Reviews */}
            <div className="row">
            <div className="col-md-10 offset-md-1 mt-4">
                <h4>Reviews</h4>
                {/* Add review components or divs here */}
            </div>
            </div>
        </div>

        {/* Bottom Navbar */}
        <nav className="navbar fixed-bottom navbar-light bg-light">
            <a href="/download" className="nav-link">Download the App</a>
            <a href="/shop" className="nav-link">Shop</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/help" className="nav-link">Help</a>
            <div className="social-links">
            {/* Social links icons */}
            </div>
        </nav>
        </>
    );
};

export default BookPage;
