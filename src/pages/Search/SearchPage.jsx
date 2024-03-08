import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllBooks } from '../../services/books';
import Navbar from '../../components/Structure/NavBar';
import Footer from '../../components/Structure/Footer';
import BookCard from '../../components/Home/BookCard';
import './SearchPage.css'

export const SearchPage = () => {
    const { author } = useParams();
    const [bookList, setBookList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            setIsLoading(true);
            try {
                const fetchedBooks = await getAllBooks();
                const booksByAuthor = fetchedBooks.filter(book => book.author === author);
                setBookList(booksByAuthor);
                setError(null);
            } catch (err) {
                setError('Failed to fetch book details.');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchBooks();
    }, [author]);

    return (
        <>
            <Navbar />
            <div className="search-page-title">
                <h1>Books by { author }</h1>
            </div>
            <div className="search-page-results-container">
                <div className="search-page-results-list">
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <div className="search-page-book-cards">
                            {bookList.map((book, index) => (
                                <BookCard key={index} book={book} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};


