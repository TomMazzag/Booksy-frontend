import FilterBookCard from "./FilterBookCard";
import "./Sort.css"
import { useState } from 'react';

export const SortBy = ({ books }) => {

    const [sortedBooks, setSortedBooks] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    const sortAlphabetically = () => {
        const sortAlpha = [...books].sort((a, b) => a.title.localeCompare(b.title));
        setSortedBooks(sortAlpha)
        console.log("newlist", sortAlpha)
    }

    const sortReverseAlphabetically = () => {
        const newList = [...books].sort((a, b) => a.title.localeCompare(b.title));
        const reverseAlpha = newList.reverse();
        setSortedBooks(reverseAlpha)
        console.log(reverseAlpha)
    }

    const sortHighToLow = () => {
        const newList = [...books].sort((a, b) =>  parseFloat(b.price.$numberDecimal) - parseFloat(a.price.$numberDecimal));
        console.log(newList)
        setSortedBooks(newList)
    }

    const sortLowToHigh = () => {
        const newList = [...books].sort((a,b) => parseFloat(a.price.$numberDecimal) - parseFloat(b.price.$numberDecimal));
        setSortedBooks(newList)
    }

    const handleSortChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        console.log(selectedValue)

        if (selectedValue === 'A - Z') {
            sortAlphabetically();
        } if (selectedValue === 'Z - A') {
            sortReverseAlphabetically();
        } if (selectedValue === 'Price (Low to high)') {
            sortLowToHigh();
        } else if (selectedValue === 'Price (High to low)') {
            sortHighToLow() }
    };
    console.log("sortedBooks:", sortedBooks)


    return (
        <>
            <div className="sort-by-button">
                <select className="select-dropdown" name="Sort By" id="Categories" onChange={handleSortChange}>
                <option value="A - Z">A - Z</option>
                <option value="Z - A">Z - A</option>
                <option value="Price (High to low)">Price (High to low)</option>
                <option value="Price (Low to high)">Price (Low to high)</option>
                </select>
            </div>
            <div className="filtered-books-container"> 
                    {/* <h1>Filtered books</h1> */}
                    <div className='filtered-books'>
                        {sortedBooks.map((book, index) => (
                            <FilterBookCard key={index} book={book} />
                        ))}
                    </div>
                    
                </div>

        </>
    )
}