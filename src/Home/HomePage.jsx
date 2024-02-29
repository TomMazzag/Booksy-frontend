// src/Home/HomePage.jsx

import Navbar from "../components/Home/NavBar.jsx";
import CategoryCard from "../components/Home/CategoryCard.jsx";
import Footer from "../components/Home/Footer.jsx";
import "./HomePage.css";
// import Carousel from '../components/Home/Carousel';


export const HomePage = () => {

    const categories = [
        "Young Adult",
        "Romance",
        "Action",
        "History",
        "Non-fiction",
        "Thriller",
        "LGBTQIA+",
        "Mystery",
        "Autobiography"
    ];

    return (
        <>
        <Navbar />
        {/* <Carousel categories={categories} />  */}
        <div className="title">
            <h1>Shop By Category!</h1>
            </div>
            
            <div className="category-grid-container">
                <div className="category-grid">
                    {categories.map((category, index) => (
                        <CategoryCard key={index} category={category} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}



// TODO: Code which allows the category cards to become a button, navigate to 
// relevant page: 

// // <Link key={index} to={`/category/${category}`}>
// <CategoryCard category={category} />
// </Link>