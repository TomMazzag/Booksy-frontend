import { useState, useEffect } from 'react';
import { getBooksBySearchQueryTitleOrAuthorOrISBN } from '../../services/books';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import './SearchBar.css';

export const SearchBar = ({ placeholder }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getBooksFromDatabase = async () => {
            try {
                const result = await getBooksBySearchQueryTitleOrAuthorOrISBN(searchQuery);
                setSearchResults(result.book);
                // console.log("Searching for books..." ,searchResults)
            } catch (error) {
                // console.log('Error fetching books:', error);
            }
        };
        if (searchQuery.trim().length >= 1) {
            getBooksFromDatabase();
        }
    }, [searchQuery]);

    const handleFilter = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = async () => {
        if (searchQuery.trim().length >= 1) {
            try {
                const result = await getBooksBySearchQueryTitleOrAuthorOrISBN(searchQuery);
                // console.log("Fetched books:", result);
                setSearchResults(result.book);

                // Redirect to book page if search result is a book
                if (result.book.length > 0) {
                    navigate(`/books/${result.book[0]._id}`);
                } else {
                    // Redirect to search page if search result is an author
                    navigate(`/books/search/author/${searchQuery}`);
                }
            } catch (error) {
                // console.log('Error fetching books:', error);
            }
        }
    };

    const handleClick = (id) => {   // redirects to individual book page 
        navigate(`/books/${id}`);
    };

    const handleAuthorClick = (author) => {
        navigate(`/books/search/author/${author}`);   // redirects to search page (books by author)
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className='search'>
            <div className='search-inputs'>
                <input
                    type="text"
                    placeholder={placeholder}
                    onChange={handleFilter}
                    onKeyDown={handleKeyPress} 
                />
                <div className='search-icon' onClick={handleSearch}>
                    <button><FontAwesomeIcon icon={faSearch} /></button>
                </div>
            </div>
            {searchQuery.length !== 0 && (
                <div className='search-results'>
                    {searchResults.map((book, key) => (
                        <div key={key}>
                            <a className='book-item' onClick={() => handleClick(book._id)}>
                                <p>Book: {book.title}</p>
                            </a>
                            <a className='book-author' onClick={() => handleAuthorClick(book.author)}>
                                <p>Author: {book.author}</p>
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
