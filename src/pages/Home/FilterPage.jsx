// src/pages/Home/FilterPage.jsx

// import { Checkbox } from "@/components/CheckBox"
import Navbar from "../../components/Home/NavBar.jsx";
import Footer from "../../components/Home/Footer.jsx";
import "./FilterPage.css"
import "../../components/Home/Footer.css";
import { CheckBox } from "../../components/Home/CheckBox.jsx";

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
    // const renderCategories = () => {
    //     return 
    // };



    return (
        <>
        <Navbar />
        <div className="filter-page-title"> Categories: </div>
        <div className="categories-container">
                {categories.map((category, index) => (
                    <CheckBox key={ index } categories={ category }/>
            ))}
        </div>
        <Footer />
        </>
    )
}





