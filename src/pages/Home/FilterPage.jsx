// src/pages/Home/FilterPage.jsx

// import { Checkbox } from "@/components/CheckBox"
import Navbar from "../../components/Home/NavBar.jsx";
import Footer from "../../components/Home/Footer.jsx";
import { CheckBox } from "../../components/Home/Filter/CheckBox.jsx";
import { SortBy } from "../../components/Home/Filter/Sort.jsx";

import "../../components/Home/Footer.css";
import "./FilterPage.css"
import { getAllBooks } from "../../services/Filters.js";

export const FilterPage = () => {


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


    const clickButton = async () => {
        try {
            await getAllBooks(categories)
            .then((books) => {
                console.log(books)
            }) 
        }
        catch(error) {
            console.log("failed to fetch")
        }
    }
    





    return (
        <>
        <Navbar />
        <div className="filter-page-title"> Categories</div>
        <SortBy />
        <div className="categories-box">
        <div className="categories-container">
                <h3 className="categories-title">Categories List:</h3>
                <br></br>
                {categories.map((category, index) => (
                    <CheckBox key={ index } categories={ category }/>
                    ))}
        </div>
        </div>
        <div> 
        
        </div>
        <button onClick={clickButton}>Click me </button>
        <Footer />
        </>
    )
}
