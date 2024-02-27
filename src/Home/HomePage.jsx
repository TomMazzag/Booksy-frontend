// import { Link } from "react-router-dom";
// import Navbar from "../Components/Home/NavBar";
// import React from 'react';
import "./HomePage.css";
import CategoryCard from "../Components/Home/CategoryCard";


export const HomePage = () => {

    const categories = ["Science Fiction", "Romance", "Philosophy", "Airport reads", "Adventure", "Horror"];

    return (
        <>
        <div className="title">
            <h1>Shop By Category!</h1>
            </div>
            <div className="category-grid-container">
                <div className="category-grid">
                    {categories.map((category, index) => (
                        <CategoryCard key={index} category={category} />
                    ))}
                </div>
            </div>
        </>
    );
}