// src/Home/HomePage.jsx

import React, { useEffect, useState } from 'react';
import Navbar from "../../components/Structure/NavBar.jsx";
import CategoryCard from "../../components/Home/CategoryCard.jsx";
import BookCard from "../../components/Home/BookCard.jsx";
import Footer from "../../components/Structure/Footer.jsx";
import "./HomePage.css";
import { getAllBooks } from "../../services/books";

export const HomePage = () => {

    const categories = [
        {name: "Action", image: "http://books.google.com/books/content?id=I12oPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"},
        {name: "Autobiography", image: "http://books.google.com/books/content?id=HjyvEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},
        {name: "History", image: "http://books.google.com/books/content?id=qb-BEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},
        {name: "LGBTQIA+", image: "http://books.google.com/books/content?id=1I1xDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},
        {name: "Mystery", image: "http://books.google.com/books/content?id=0cH0AAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},
        {name: "Non-fiction", image: "http://books.google.com/books/content?id=XwLFDBmVO20C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},
        {name: "Romance", image: "http://books.google.com/books/content?id=oqmBpk1EzvAC&printsec=frontcover&img=1&zoom=1&source=gbs_api"},
        {name: "Thriller", image: "http://books.google.com/books/content?id=XA87EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},
        {name: "Young Adult", image: "http://books.google.com/books/content?id=jaOHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"},
        {name: "Fantasy", image: "http://books.google.com/books/content?id=LmSTEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"}
    ];

    const [books, setBooks] = useState([]);
    const [categoryBooks, setCategoryBooks] = useState([]);
    const [number, setNumber] = useState(10);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const booksData = await getAllBooks();
                setBooks(booksData);
                let categoryList = []
                    for (let i=number; i<=number+6; i++) {
                        categoryList.push(booksData[i])
                    } 
                    setCategoryBooks(categoryList)
                    // console.log(categoryList)
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
    
    const showNextSixBooks = () => {
        setNumber(number+6)
        let categoryList = []
            for (let i=number; i<=number+6; i++) {
                categoryList.push(books[i])
            } 
        setCategoryBooks(categoryList)
        // console.log(categoryList)
    }


    return (
        <>
        <Navbar />
            <div className="bestsellers-title"> 
                <h1> Browse Our Bestsellers </h1>
            </div>
            <div className="category-books-container">
                <div className="category-book-selection">
                    {categoryBooks.map((categorybook) => (
                        <BookCard key={categorybook._id} book={categorybook} />
                    ))}
                <p className="show-more-button" onClick={showNextSixBooks}>></p>
                </div>
            </div>
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
                <h1>A Selection Of Our Favourites </h1>
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

