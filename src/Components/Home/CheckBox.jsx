

import { useState } from "react";


export const CheckBox = (props) => {

const [checked, setChecked] = useState(" ")


    return (
        <label className="category-item">{ props.categories }
        <input type="checkbox" { ...checked } />
        <span className="checkmark"></span>
        </label>
    )
}


