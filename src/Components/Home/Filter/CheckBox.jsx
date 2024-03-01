import { useState } from "react";


export const CheckBox = (props) => {

// const [checked, setChecked] = useState(false)

if (props.selected) {
    props.setAddCategory(props.categories)
}

const handleChange = (event) => {
    if (event.target.checked) {
        props.setAddCategory(props.categories)
    } else {
        props.setRemoveCategory(props.categories)
        console.log("Unchecked")
    }
}


    return (
        <label className="category-item">{ props.categories }
    { 
        props.selected ? <input type="checkbox" onChange={handleChange} checked /> : 
        <input type="checkbox" onChange={handleChange} />
    }
        <span className="checkmark"></span>
        </label>
    )
}


