// src/Home/HomePage.jsx

import React, { useEffect, useState } from 'react';
import Navbar from "../../components/Home/NavBar.jsx";
import CategoryCard from "../../components/Home/CategoryCard.jsx";
import BookCard from "../../components/Home/BookCard.jsx";
import Footer from "../../components/Home/Footer.jsx";
import "./HomePage.css";
import { getAllBooks } from "../../services/books";

export const HomePage = () => {

    const categories = [
        "Young Adult",
        "Romance",
        "Action",
        "History",
        "Non-fiction",
        "Thriller",
        "LGBTQIA+",
        "Mystery",
        "Autobiography"
    ];

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const booksData = await getAllBooks();
                setBooks(booksData);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
    
        fetchBooks();
    }, []);

    const [isHovering, setIsHovering] = useState(false);
    
    const handleMouseEnter = () => {
        setIsHovering(true);
    };
    
    const handleMouseLeave = () => {
    setIsHovering(false);
        };
    

    return (
        <>
        <Navbar />
        <div className="title">
            <h1>Shop By Category! </h1>
            </div>
            <div className="category-grid-container">
                <div className="category-grid">
                    {categories.map((category, index) => (
                        <CategoryCard key={index} category={category} />
                    ))}
                </div>
            </div>

            <div className="title">
                <h1>Or see a selection of our favourites </h1>
            </div>
            <div
                className={`book-list-container ${isHovering ? 'paused' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
            <div className="category-grid-container-selection">
                <div className="category-grid-selection">
                    {books.map((book) => (
                        <BookCard key={book._id} book={book} />
                    ))}
                </div>
            </div>
            </div>
            <Footer />
        </>
    );
}



// TODO: Code which allows the category cards to become a button, navigate to 
// relevant page: 

