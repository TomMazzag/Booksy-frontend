// src/Home/HomePage.jsx

import React, { useEffect, useState } from 'react';
import Navbar from "../../components/Home/NavBar.jsx";
import CategoryCard from "../../components/Home/CategoryCard.jsx";
import BookCard from "../../components/Home/BookCard.jsx";
import Footer from "../../components/Home/Footer.jsx";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { getBookById, getAllBooks } from "../../services/books";

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
                setBooks(booksData); // Update this line to set the books state
            } catch (error) {
                console.error("Error fetching books:", error);
                // Optionally, handle error, e.g., setting an error state to display an error message
            }
        };
    
        fetchBooks();
    }, []);

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
                <h1>Or See Our Book Selection</h1>
            </div>
            <div className="category-grid-container">
                <div className="category-grid">
                    {books.map((book) => (
                        <BookCard key={book._id} book={book} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}



// TODO: Code which allows the category cards to become a button, navigate to 
// relevant page: 

// // <Link key={index} to={`/category/${category}`}>
// <CategoryCard category={category} />
// </Link>