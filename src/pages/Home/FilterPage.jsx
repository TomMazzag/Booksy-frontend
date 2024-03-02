// src/pages/Home/FilterPage.jsx

// import { Checkbox } from "@/components/CheckBox"
import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import Navbar from "../../components/Home/NavBar.jsx";
import Footer from "../../components/Home/Footer.jsx";
import { CheckBox } from "../../components/Home/Filter/CheckBox.jsx";
import { SortBy } from "../../components/Home/Filter/Sort.jsx";
import FilterBookCard from "../../components/FilterBookCard.jsx";
import { getAllBooksByCategory } from "../../services/filters.jsx";


import "../../components/Home/Footer.css";
import "./FilterPage.css"

export const FilterPage = () => {
    const [books, setBooks] = useState([]);
    const [checkedCategories, setCheckedCategories] = useState([]);


    const location = useLocation();
    const { selected } = location.state;   // stores the state of homepage catgory in 'selected'


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


    useEffect(() => {
        setCheckedCategories([selected]);   // assigns selected to checked categories, shows as checked on filter page
    }, [selected]);


    useEffect(() => {
        if (checkedCategories.length > 0) {
            getAllBooksByCategory(checkedCategories)   // fetches all books that are checked
                .then((booksData) => {
                    setBooks(booksData.books);
                })
                .catch(error => {
                    console.log("Failed to fetch books:", error);
                });
        }
    }, [checkedCategories]);


    const updateBooksByCategories = (categories) => {
        if (categories.length > 0) {
            getAllBooksByCategory(categories)
                .then((booksData) => {
                    setBooks(booksData.books);
                })
                .catch(error => {
                    console.log("Failed to fetch books:", error);
                });
        } else {
            setBooks([]);
        }
    };
    
    const handleCategoryChange = (category) => {
        // Toggle category selection
        setCheckedCategories(prevCategories => {
            if (prevCategories.includes(category)) {
                // If category is already checked, remove it
                const updatedCategories = prevCategories.filter(cat => cat !== category);
                updateBooksByCategories(updatedCategories);
                return updatedCategories;
            } else {
                // If category is not checked, add it
                const updatedCategories = [...prevCategories, category];
                updateBooksByCategories(updatedCategories);
                return updatedCategories;
            }
        });
    };


    return (
        <>

            <Navbar />
            <div className="filter-page-title"> Filter Books </div>
            <SortBy />
            <div className="categories-box">
                <div className="categories-container">
                    <h3 className="categories-title">Categories List:</h3>
                    <br />
                    {categories.map((category, index) => (
                        <CheckBox
                            key={index}
                            categories={category}
                            selected={checkedCategories.includes(category)}
                            setAddCategory={handleCategoryChange}
                            setRemoveCategory={handleCategoryChange}
                        />
                    ))}
                </div>
                <div className="filtered-books">
                    <h1>Filtered books</h1>
                    {books.map((book, index) => (
                        <FilterBookCard key={index} book={book} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};










