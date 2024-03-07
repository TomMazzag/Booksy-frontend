import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./FilterBookCard.css"


const FilterBookCard = ({ book }) => {

    const navigate = useNavigate();
    // Access the price using book.price.$numberDecimal
    const price = book.price.$numberDecimal;
    const imageUrl = book.image_url ? book.image_url : "https://www.peeters-leuven.be/covers/no_cover.gif";


    const handleClick = () => {
        navigate(`/books/${book._id}`);
    };

    const renderSynopsis = (synopsis) => {
        if (synopsis.length <= 200) {
            return synopsis;
        }
        // console.log(`Book: ${book.title} --- Synopsis: ${synopsis}`)
        return `${synopsis.substring(0, 200)}...`;
    };
    
    return (
        <div className="filter-book-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <img src={imageUrl || 'https://www.peeters-leuven.be/covers/no_cover.gif'} alt={book.title} />
            <div className='filter-book-text'>
                <h3>{book.title}</h3>
                <div className='filter-book-para'>
                    <p className='filter-description'> Description: {book.synopsis ? renderSynopsis(book.synopsis) : "N/A"}</p>
                    <p className='filter-price'>Price: £{price}</p>
                </div>
            </div>
        </div>
    );
};

export default FilterBookCard;