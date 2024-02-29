// src/Components/Home/CategoryCard.jsx

import "./CategoryCard.css"

const CategoryCard = ({ category }) => {

    let images = ["http://books.google.com/books/content?id=s1gVAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", 
    "http://books.google.com/books/content?id=80pje6QWDEYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=So4NOO9Yq54C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "http://books.google.com/books/content?id=IFyjswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    "http://books.google.com/books/content?id=cF3KCQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"]

    const randomIndex = Math.floor(Math.random() * images.length);

    
return (
    <div className="category-card">
    <h3>{category}</h3>
    <img src={images[randomIndex]} alt={category} />
    </div>
);
}

export default CategoryCard;
