import Navbar from "../../components/Home/NavBar"
import Footer from "../../components/Home/Footer"
import { useState, useEffect } from "react"
import { useParams, Link } from 'react-router-dom';
import { getAllBooks, getBooksByAuthor } from "../../services/books"
import './SearchPage.css'


export const SearchPage = ( books ) => {
    const { author } = useParams(); // Use useParams to get the bookId from the URL
    const [bookList, setBookList] = useState(null); // State to hold the fetched book details
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const location = useLocation();
    const { selected } = location.state;


    useEffect(() => {
        const fetchBook = async () => {
            setIsLoading(true);
            try {
                const fetchedBook = await getAllBooks();
                console.log("fetched books: ", fetchedBook)
                setBookList(fetchedBook);
                const listOfAuthors = fetchedBook.map((book) => book.author)
                console.log("Author list: ", listOfAuthors)


    
                setError(null); // Reset error state in case of successful fetch
            } catch (err) {
                setError('Failed to fetch book details.');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchBook();
    }, [author])

    return (
        <>
        <Navbar />
        <div className="search-page-title">
            <h1>This is the search page</h1>
        </div>

        <div className="search-page-results-container">

            <div className="search-page-results-list">
                <ul>{}</ul>
        


            </div>
        </div>


        <Footer />
        </>
    )
}