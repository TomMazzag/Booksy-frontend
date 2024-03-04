import { useState, useEffect } from 'react'
import { getBooksByTitle } from '../../services/books'
import { getBooksByAuthor } from '../../services/books';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'


import './SearchBar.css'


export const SearchBar = ({ placeholder }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchFilter, setSearchFilter] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const getBooksTitleFromDatabase = async () => {
            const result = await getBooksByTitle(searchQuery);
            const result2 = await getBooksByAuthor(searchQuery)
            const bookTitles = result.book.map(book => book.title)
            const bookAuthors = result2.book.map(book => book.author)
            console.log('book titles: ' , bookTitles)
            console.log('book authors: ', bookAuthors)
            setSearchResults([bookTitles, bookAuthors]);
            console.log("search results: ", searchResults)
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
                })
                .catch(error => {
                    console.log("Failed to fetch search results:", error);
                });
        }
    };

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
                {searchFilter.length !== 0 && (
                    <div className='search-results'>
                        {searchFilter.map((book, key) => (
                            <a className='book-item' href={`/books/${book._id.$oid}`} key={key}>
                                <p>{book.title}</p>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

// href={`/books/${._id.$oid}`}




    
//     useEffect(() => {
//         const getBooksTitleFromDatabase = async () => {
//             const result = await getBooksByTitle(searchFilter)
//             console.log("Overall result: ", result.book)
//             const titleResult = getAllTitles(result.book)
//             console.log("List of titles:", titleResult)
//             console.log("Printing title result:", result.book[0].title)
//             setSearchResults(result.book[0].title)
//             console.log("search results:" , searchResults)
//             console.log("search query:", searchQuery)
//             console.log("Search filter: ", searchFilter)
            
//         }
//         getBooksTitleFromDatabase()
//     }, [searchFilter]);


//     const handleFilter = (e) => {
//     const searchWord = e.target.value;
//     const filteredResults = searchResults.filter((value) => {
//         return value.title.toLowerCase().includes(searchWord.toLowerCase());
//     });
//     setSearchQuery(filteredResults);
//     setSearchFilter(searchWord); // Assuming setSearchQuery updates the searchQuery state
// };


    

//     // TODO get bookData through API request to our database

//     return (
//         <>
//             <div className='search'>
//                 <div className='search-inputs'>
//                     <input type="text"
//                     placeholder={placeholder} 
//                     onChange={handleFilter}
//                     />
//                     <div className='search-icon' onClick={handleSearch}>
//                         <button><FontAwesomeIcon icon={faSearch} /> </button>
//                     </div>
//                 </div>
//                 {searchFilter.length != 0 && (
//             <div className='search-results'>
//                 {searchQuery.map((book, key) => {
//                     return (
//                     <a className='book-item' href={`/books/${book._id.$oid}`}> 
//                         <p> {book.title} </p>
//                         key={key}
//                     </a>
//                     );
//                 })}
//             </div>
//                 )
//                 }
//             </div>
//         </>
//     )
    
// }