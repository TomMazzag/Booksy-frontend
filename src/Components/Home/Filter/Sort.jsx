import "./Sort.css"
import * as React from 'react'




export const SortBy = () => {
// const [open, setOpen] = React.useState(false)

// const handleOpen = () => {
//     setOpen(!open)

    return (
        <>
        <div className="sort-by-button">
            <select className="select-dropdown" name="Sort By" id="Categories">
            <option value="A -Z ">A - Z </option>
            <option value="Z - A">Z - A</option>
            <option value="Price">Price (High to low)</option>
            <option value="Price">Price (Low to high)</option>
            </select>
        </div>

        </>
    )
}