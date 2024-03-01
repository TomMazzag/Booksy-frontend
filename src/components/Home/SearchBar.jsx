import { useState } from 'react'

export const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const onSearch = (searchQuery) => {
        // todo api to fetch results from database
        console.log('result: ', searchQuery)
    } 
    return (
        <>

        <div className='search-container'>
        <div className='search-bar'>
            <input type='text' value={value} onChange={onChange} />
            <button onClick={() => onSearch(value)}> Search </button>
        </div>
        <div className='drop-down'>
            
        </div>
        </div>
        </>
    )

}