// src/pages/Home/FilterPage.jsx

// import { Checkbox } from "@/components/CheckBox"
import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import Navbar from "../../components/Home/NavBar.jsx";
import Footer from "../../components/Home/Footer.jsx";
import { CheckBox } from "../../components/Home/Filter/CheckBox.jsx";
import { SortBy } from "../../components/Home/Filter/Sort.jsx";
import FilterBookCard from "../../components/FilterBookCard.jsx";
import { getAllBooksByCategory, getAllBooksByPrice } from "../../services/filters.jsx";

import "../../components/Home/Footer.css";
import "./FilterPage.css"


export const FilterPage =  () => {
    const [books, setBooks] = useState([])
    const [addCategory, setAddCategory] = useState(" ")
    const [removeCategory, setRemoveCategory] = useState(" ")
    const [checkedCategories, setCheckedCategories] = useState([])

    const location = useLocation();
    const { selected } = location.state;
    console.log("value:" , selected)

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

    // const getPrice = () => {
    //     try {
    //         getAllBooksByPrice()
    //         .then((books) => {
    //             console.log(books)
    //         })
    //     }
    //     catch (error) {
    //         console.log("failed to fetch")
    //     }
    // }


    useEffect(() => {
            try {
                getAllBooksByCategory(checkedCategories)
                .then((books) => {
                    console.log(books)
                    setBooks(books.books)
                }) 
            }
            catch(error) {
                console.log("failed to fetch")
        }
    }, [checkedCategories]);

    useEffect(() => {
        if (addCategory !== " ") {
            const updatedList = [...checkedCategories, addCategory]
            setCheckedCategories(updatedList)
            console.log("checking", addCategory)
            setAddCategory(" ")
        } else if (removeCategory !== " ") {
            setCheckedCategories(checkedCategories.filter(category => category !== removeCategory))
            setRemoveCategory(" ")
            console.log("unchecking", removeCategory)
        } console.log(checkedCategories)
    }, [addCategory, removeCategory])



    return (
        <>
        <Navbar />
        <div className="filter-page-title"> Filter Books </div>
        <SortBy />
        <div className="categories-box">
        <div className="categories-container">
                <h3 className="categories-title">Categories List:</h3>
                <br></br>
                {categories.map((category, index) => {

                    if (category === selected) {
                            return (
                            <CheckBox 
                            key={ index }
                            categories={ category } 
                            setAddCategory={setAddCategory} 
                            setRemoveCategory={setRemoveCategory} 
                            selected={ true }
                            />
                        )
                    } else {
                        return (
                            <CheckBox 
                            key={ index }
                            categories={ category } 
                            setAddCategory={setAddCategory} 
                            setRemoveCategory={setRemoveCategory} 
                            />
                        )
                    }}
                )}
        </div>
        <div className="filtered-books">
            <h1>Filtered books</h1>
            {[...books].map((book, index) => (
                <FilterBookCard key={index} book={book}  />
            ))}
        </div>
        </div>
        <div> 
        {/* <button onClick={getPrice}>click me</button> */}
        </div>
        <Footer />
        </>
    )
}
