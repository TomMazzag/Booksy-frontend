import { useState, useEffect } from 'react'
import { getBooksByTitle } from '../../services/books'
import { getBooksByAuthor } from '../../services/books';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';


import './SearchBar.css'


export const SearchBar = ({ placeholder }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchFilter, setSearchFilter] = useState([]);
    const [searchResultsTitle, setSearchResultsTitle] = useState([]);
    const [searchResultsAuthor, setSearchResultsAuthor] = useState([])
    const [searchID, setSearchID] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getBooksTitleFromDatabase = async () => {
            const result = await getBooksByTitle(searchQuery);
            const result2 = await getBooksByAuthor(searchQuery)
            console.log("list of books: ", result)
            const bookTitles = result.book.map(book => book.title)
            const bookAuthors = result2.book.map(book => book.author)
            const book_id = result.book.map(book => book._id)

            console.log("upper levl bookid: ", book_id)
            console.log('book titles: ' , bookTitles)
            console.log('book authors: ', bookAuthors)

            setSearchResultsAuthor(bookAuthors)();
            setSearchResultsTitle(bookTitles);
            setSearchID(book_id);
            console.log("search result authors: ", searchResultsAuthor)
            console.log("search result IDs: ", searchID);
            console.log("search results: ", searchResultsTitle);
        };
        getBooksTitleFromDatabase();
    }, [searchQuery]);


    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setSearchQuery(searchWord);
    };

    const handleSearch = () => {                        // currently does nothing, search icon non-functional
        if (searchQuery.trim().length >= 1) {
            getBooksByTitle(searchQuery)
                .then((data) => {
                    setSearchFilter(data);
                    console.log("search filter: ", searchFilter)
                    navigate(`/books/search/${data.author}`);
                })
                .catch(error => {
                    console.log("Failed to fetch search results:", error);
                });
        }
    };

    // //  searchResultsAuthor.map((author) => {
    //     const bookAuthor = author
    //     {bookAuthor}
    // }),


    return (
        <>
            <div className='search'>
                <div className='search-inputs'>
                    <input
                        type="text"
                        placeholder={placeholder}
                        onChange={handleFilter}
                    />
                    <div className='search-icon' onClick={handleSearch}>
                        <button><FontAwesomeIcon icon={faSearch} /> </button>
                    </div>
                </div>
                {searchQuery.length !== 0 && (
                    <div className='search-results'>
                        {searchResultsTitle.map((title, key) => (
                                searchID.map((id) => {
                                    title.id = id;
                                }),
                            <a className='book-item' href={`/books/${title.id}`}  key={key}>
                                <p>{ title }</p>
                            </a>
                        ))}
                        {searchResultsAuthor.map((author, key) => (
                            <a className='book-author' href={`/books/search/${author}`} key={key}> 
                            <p>{ author }</p>
                            </a>
                        ))
                        }
                    </div>
                )}
            </div>
        </>
    );
};

// href={`/books/${._id.$oid}`}
