import { useState, useEffect } from 'react'
import { getBooksByTitle } from '../../services/books'

export const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onSearch = (searchQuery) => {
        // todo api to fetch results from database
        console.log('result: ', searchQuery)
    } 

    useEffect(() => {
        if (searchQuery.trim().length >= 1) {
            getBooksByTitle(searchQuery)
            .then((data) => {
                setValue(data.title)
            })
        }
        
    }, [searchQuery])
    return (
        <>

        <div className='search-container'>
        <div className='search-bar'>
            <input type='text' value={value} onChange={onChange} />
            <button onClick={() => onSearch(value)}> Search </button>
        </div>

        </div>
        </>
    )

}