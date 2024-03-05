import { useState } from "react";


export const CheckBox = ({ categories, selected, setAddCategory, setRemoveCategory }) => {

    const handleChange = (e) => {
        if (e.target.checked) {
            setAddCategory(categories);
        } else {
            setRemoveCategory(categories);
        }
    };

    return (
        <div className="filter-item">
            <label className="category-item">
            {categories}
            </label>
            <input type="checkbox" onChange={handleChange} checked={selected} />
        </div>
            
    );
};

