// src/components/Home/BookCard.jsx

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Home/NavBar.jsx';
import Footer from "../../components/Home/Footer.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBasket, faStar } from '@fortawesome/free-solid-svg-icons';
import './BookPage.css';
import { getBookById } from '../../services/books'; 
import LikeButton from '../../components/LikeButton/LikeButton.jsx';
import { addToBasket } from '../../services/basket';

const BookPage = () => {
    const { bookId } = useParams(); // Use useParams to get the bookId from the URL
    const [book, setBook] = useState(null); // State to hold the fetched book details
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showFullSynopsis, setShowFullSynopsis] = useState(false);
    

    const addItemToBasket = () => {
        addToBasket(book._id, '65e07035deb88a4a513164ed');
        console.log(book._id);
    }

    useEffect(() => {
        const fetchBook = async () => {
            setIsLoading(true);
            try {
                const fetchedBook = await getBookById(bookId);
                setBook(fetchedBook.book);
                console.log(fetchedBook.book)
                setError(null); // Reset error state in case of successful fetch
            } catch (err) {
                setError('Failed to fetch book details.');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBook();
    }, [bookId]); // Rerun the effect if bookId changes

    const toggleSynopsisVisibility = () => {
        setShowFullSynopsis(!showFullSynopsis); // Toggle between showing full or partial synopsis
    };

    if (isLoading) return (
        <>
            <Navbar />
            <div>Loading...</div>
            <Footer />
        </>
    );
    if (error) return <div>{error}</div>;
    if (!book) return <div>No book found</div>; // Or any other error handling

    // Function to render synopsis based on showFullSynopsis state
    const renderSynopsis = (synopsis) => {
        if (showFullSynopsis || synopsis.length <= 400) {
            return synopsis;
        }
        return `${synopsis.substring(0, 400)}...`;
    };

    return (
        <>
            <Navbar />
            <div className="container mt-4 centered-content">
                <div className="row">
                    <div className="col-md-4">
                        <img src={book.image_url || 'https://www.peeters-leuven.be/covers/no_cover.gif'} alt="Book Image" className="img-fluid" />
                    </div>

                    <div className="col-md-5">
                        <h2>{book.title}</h2>
                        <p>Author: {book.author}</p>
                        <p>Rating: <FontAwesomeIcon icon={faStar} /> 4.5</p>
                        <p>Price: £{book.price?.$numberDecimal || 'N/A'}</p>
                        <p>Status: In Stock</p>
                        <LikeButton />
                        <button className="btn btn-outline-primary" onClick = {addItemToBasket}  > 
                                <FontAwesomeIcon icon={faShoppingBasket} /> Add to Basket
                        </button>
                    </div>
                </div>
                <div className="synopsis">
                    <h3>Synopsis</h3>
                    <p>{renderSynopsis(book.synopsis)}</p>
                    {(book.synopsis.length > 400 || showFullSynopsis) && (
                        <button onClick={toggleSynopsisVisibility} className="btn btn-outline-secondary">
                            {showFullSynopsis ? 'Hide' : 'See More'}
                        </button>
                        
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BookPage;
