// src/Home/Account/AccountPage.jsx

import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import Navbar from "../../components/Home/NavBar.jsx";
import BookCard from "../../components/Home/BookCard.jsx";
import Footer from "../../components/Home/Footer.jsx";
import "../Home/HomePage.css";

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
                    <p>User fullname: {user?.fullName}</p>
                </div>
            </div>
            <Footer />
        </>
    );
};