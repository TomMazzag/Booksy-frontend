import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import "./Navbar.css"


const Navbar = () => {
    const navigate = useNavigate();
    const id = window.localStorage.getItem("id")

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
        <div className="pageButtons">
            <button onClick={home}>Home</button>
            <button onClick={profilePage}>profilePage</button>
            <button onClick={shoppingBasket}>shoppingBasket</button>
            <button onClick={favouriteBooks}>favouriteBooks</button>
            <button onClick={signIn}>signIn</button>
        </div>
    </nav>
)

};

export default Navbar;