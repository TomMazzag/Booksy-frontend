// import React from 'react';
import "./CategoryCard.css"

const CategoryCard = ({category}) => {

    
return (
    <div className="category-card">
    <h3>{category}</h3>
    <img src={"src/assets/react.svg"} alt={category} />
    </div>
);
}

export default CategoryCard;
