import { useState, useEffect } from 'react'
import { getBooksByTitle } from '../../services/books'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './SearchBar.css'


export const SearchBar = ( { placeholder } ) => {
    const [searchQuery, setSearchQuery] = useState("")
    const [searchFilter, setSearchFilter] = useState([])
    const [searchResults, setSearchResults] = useState([])

    const getAllTitles = (bookList) => {
        const bookTitles = []
        for (let i = 0; i < bookList.length; i++) {
            bookTitles.push(bookList.title)
        }
        console.log("Book titles:" , bookTitles)
        return bookTitles
    }
    
    useEffect(() => {
        const getBooksTitleFromDatabase = async () => {
            const result = await getBooksByTitle(searchFilter)
            const titleResult = getAllTitles(result.book[0].title)
            console.log("List of titles:", titleResult)
            console.log("Printing title result:", result.book[0].title)
            setSearchResults(result.book[0].title)
            
        }
        getBooksTitleFromDatabase()
    }, [searchFilter]);


    // TODO write a for loop that iterates through the array of books and 
    // returns the title of each book


    const handleFilter = (e) => {
        const searchWord = e.target.value
        searchResults.filter((value) => {
            console.log("value: ", value.title)
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setSearchFilter([])
        } else {
            setSearchFilter(searchWord)
        }
    }


    const handleSearch = () => {
        if (searchQuery.trim().length >= 1) {
            getBooksByTitle(searchQuery)
                .then((data) => {
                    setSearchFilter(data);
                    console.log("searching...")
                })
                .catch(error => {
                    console.log("Failed to fetch search results:", error);
                });
        }

    };

    

    // TODO get bookData through API request to our database

    return (
        <>
            <div className='search'>
                <div className='search-inputs'>
                    <input type="text"
                    placeholder={placeholder} 
                    onChange={handleFilter}
                    />
                    <div className='search-icon' onClick={handleSearch}>
                        <button><FontAwesomeIcon icon={faSearch} /> </button>
                    </div>
                </div>
                {searchFilter.length != 0 && (
            <div className='search-results'>
                {/* {searchResults.map((book, key) => (
                    <a className='book-item' href={`/books/${book._id.$oid}`} key={key}>
                        <p>{book.title}</p>
                    </a>
                ))} */}
            </div>
                )
                }
            </div>
        </>
    )
    
}


