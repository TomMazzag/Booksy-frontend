// src/Home/FavouritesPage.jsx

import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import Navbar from "../../components/Home/NavBar.jsx";
import BookCard from "../../components/Home/BookCard.jsx";
import Footer from "../../components/Home/Footer.jsx";
import "../Home/HomePage.css";
import { getAllBooks } from "../../services/books.jsx";
import { getUserById } from '../../services/users.jsx';

export const FavouritesPage = () => {
    const [books, setBooks] = useState([]);
    const { user } = useUser();
    const [userData, setuserData] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await getUserById(user.id);
                setuserData(userData);
                // Now userData contains all user details, including favourites
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
    
        if (user) {
            fetchUserData();
        }
    }, [user]);

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

    return (
        <>
            <Navbar />
            <div className="title">
                <h1>Your Favourite books</h1>
            </div>
            <div className="category-grid-container">
                <div className="category-grid">
                {userData && userData.saved_items ? (
                        books.filter(book => userData.saved_items.includes(book._id)).map(book => (
                            <BookCard key={book._id} book={book} />
                        ))
                    ) : (
                        <p>No favourite books added to your list.</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}