// import React from 'react';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const id = window.localStorage.getItem("id")

    const profilePage = () => {
        navigate(`/profile/${id}`);
    };

    const home = () => {
        navigate("/posts");
    };

    const shoppingBasket = () => {
        navigate("/basket");
    };

    const favouriteBooks = () => {
        navigate(`/favourites/${id}`);
    };

    const signIn = () => {
        navigate("/signIn");
    };

    return (
        <nav>
            <div onClick={home}>
                <p>Booksy</p>
            </div>
            <div>
                <button onClick={home}>Home</button>
                <button onClick={profilePage}>Profile</button>
                <button onClick={shoppingBasket}>Shopping Basket</button>
                <button onClick={favouriteBooks}>Favourite Books</button>
                <button onClick={signIn}>Sign In</button>
            </div>
        </nav>
    );
};

export default Navbar;
