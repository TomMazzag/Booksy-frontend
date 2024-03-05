// src/Home/AccountPage.jsx

import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import Navbar from "../../components/Home/NavBar.jsx";
import BookCard from "../../components/Home/BookCard.jsx";
import Footer from "../../components/Home/Footer.jsx";
import "../Home/HomePage.css";
import { getAllBooks } from "../../services/books.jsx";
import { getUserById } from '../../services/users.jsx';

export const AccountPage = () => {
    const [userData, setuserData] = useState([]);
    const { isSignedIn, user } = useUser();

    return (
        <>
            <Navbar />
            <div className="title">
                <h1>Your Account</h1>
            </div>
            <div className="category-grid-container">
                <div className="category-grid">
                    {isSignedIn && userData && userData.saved_items ? (
                        books.filter(book => userData.saved_items.includes(book._id)).map(book => (
                            <BookCard key={book._id} book={book} />
                        ))
                    ) : isSignedIn ? (
                        <p>No favourite books added to your list.</p>
                    ) : (
                        <p>Don't lose your faves! Sign in or create an account.</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};