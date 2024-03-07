// src/components/Home/BookCard.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./BookCard.css"

const BookCard = ({ book }) => {
    const navigate = useNavigate();
    // Access the price using book.price.$numberDecimal
    const price = book.price.$numberDecimal;
    const imageUrl = book.image_url ? book.image_url : "https://www.peeters-leuven.be/covers/no_cover.gif";

    const handleClick = () => {
        navigate(`/books/${book._id}`);
    };

    return (
        <div className="book-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <img src={book.image_url || 'https://www.peeters-leuven.be/covers/no_cover.gif'} alt={book.title} />
            <h3>{book.title}</h3>
            <p className='author'>{book.author}</p>
            <p className='book-card-price'>£{price}</p>

        </div>
    );
};

export default BookCard;