// src/Components/Home/CategoryCard.jsx

import React from 'react'
import "./CategoryCard.css"

const CategoryCard = ({ category }) => {

    let images = {
        "Young Adult": "http://books.google.com/books/content?id=s1gVAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", 
        "Romance": "http://books.google.com/books/content?id=DurvAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        "Action": "http://books.google.com/books/content?id=So4NOO9Yq54C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "History": "http://books.google.com/books/content?id=qb-BEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "Non-fiction": "http://books.google.com/books/content?id=zaPoAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "Thriller": "http://books.google.com/books/content?id=XA87EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "LGBTQIA+": "http://books.google.com/books/content?id=1I1xDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "Mystery": "http://books.google.com/books/content?id=0cH0AAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "Autobiography": "http://books.google.com/books/content?id=fbVEDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    }

    const imageUrl = images[category]

return (
    <div className="category-card">
    <h3>{category}</h3>
    <img src={imageUrl} alt={category} />
    </div>
);
}

export default CategoryCard;
