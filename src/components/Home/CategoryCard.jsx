// src/Components/Home/CategoryCard.jsx


import React from 'react'

import { useNavigate } from 'react-router-dom';

import "./CategoryCard.css"
const CategoryCard = ({ category }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/filter', { state: { selected: category } });
    };
    
return (
    <div className="category-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
    <h3>{category.name}</h3>
    <img src={category.image} alt={category} />
    </div>
);
}

export default CategoryCard;

