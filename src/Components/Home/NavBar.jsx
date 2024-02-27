// import React from 'react';
import { useNavigate } from "react-router-dom";
import "../Home/NavBar.css" // Import CSS file

const Navbar = () => {
    const navigate = useNavigate();
    const id = window.localStorage.getItem("id")

// all navigation routes are placeholders, as we will be using modals
    const profilePage = (id) => {
        navigate(`/profile/${id}`);
    };
    const home = () => {
        navigate("/posts")
    }

    const shoppingBasket = () => {
        navigate("/basket")
    }

    const favouriteBooks = () => {
        navigate(`/favourites/${id}`)
    }

    const signIn = () => {
        navigate("signIn")
    }

    return (
        <nav>
            <div onClick={home} className="logoAndText">
                <p>Booksy</p>
            </div>
            
            <div className="pageButtons">
                <button onClick={home}>Home</button>
                <button onClick={() => profilePage(id)}>Profile</button>
                <button onClick={home}>Home</button>
                <button onClick={shoppingBasket}>Shopping Basket</button>
                <button onClick={favouriteBooks}>Favourite Books</button>
                <button onClick={signIn}>Sign In</button>
            </div>
        </nav>
    );
};

export default Navbar;
