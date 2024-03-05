import FilterBookCard from "./FilterBookCard";
import "./Sort.css"
import { useState } from 'react';

export const SortBy = ({ books, setBooks }) => {

    const [selectedOption, setSelectedOption] = useState('');

    const sortAlphabetically = () => {
        const sortAlpha = [...books].sort((a, b) => a.title.localeCompare(b.title));
        setBooks(sortAlpha)
    }

    const sortReverseAlphabetically = () => {
        const newList = [...books].sort((a, b) => a.title.localeCompare(b.title));
        const reverseAlpha = newList.reverse();
        setBooks(reverseAlpha)
    }

    const sortHighToLow = () => {
        const newList = [...books].sort((a, b) =>  parseFloat(b.price.$numberDecimal) - parseFloat(a.price.$numberDecimal));
        setBooks(newList)
    }

    const sortLowToHigh = () => {
        const newList = [...books].sort((a,b) => parseFloat(a.price.$numberDecimal) - parseFloat(b.price.$numberDecimal));
        setBooks(newList)
    }

    const handleSortChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);

        if (selectedValue === 'A - Z') {
            sortAlphabetically()
        } if (selectedValue === 'Z - A') {
            sortReverseAlphabetically()
        } if (selectedValue === 'Price (Low to high)') {
            sortLowToHigh()
        } else if (selectedValue === 'Price (High to low)') {
            sortHighToLow()
        }
    };

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
        </>
    )
}