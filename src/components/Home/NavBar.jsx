// src/Components/Home/NavBar.jsx
import SignInComponent from "../Authentication/LogInModal";
import { useUser } from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";
import "../Home/NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    // You can use this function to get the user's first, last and fullName if needed
    const { isSignedIn, user } = useUser();
    const [openMenu, setOpenMenu] = useState(false)
    const navigate = useNavigate()

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    const navigateHomePage = () => {
        navigate("/")
    }

    if (isSignedIn) {
        return ( 
            <nav>
                <div className="navbar-content">
                    <div className="navbar-logo">
                        <p onClick={navigateHomePage}> Booksy </p>
                    </div>
                    <div className="navbar-middle">
                        <input type="text" placeholder="Search Books" />
                    </div>
                    <div className="navbar-actions">
                        <p>Hello {user.firstName} </p>
                        <p className="heart">♥</p>
                        <UserButton />
                        <p className="basket">Cart</p>
                    </div>
                    <div className="mobile-menu">
                        <FontAwesomeIcon icon={faBars} onClick={toggleMenu}/>
                        {openMenu ? (<ul className="mobile-menu-options">
                            <li>Hello {user.firstName}</li>
                            <li><p className="heart">Favourites</p></li>
                            <li><p className="basket">Shopping Cart</p></li>
                        </ul>) : null}
                    </div>
                </div>
            </nav>
        )
    } else {
        return (
            <nav>
                <div className="navbar-content">
                    <div className="navbar-logo">
                        <p onClick={navigateHomePage}> Booksy </p>
                    </div>
                    <div className="navbar-middle">
                        <input type="text" placeholder="Search Books" />
                    </div>
                    <div className="navbar-actions">
                        <SignInComponent />
                        <p className="heart">♥</p>
                        <p className="basket">Cart</p>
                    </div>
                    <div className="mobile-menu">
                        <FontAwesomeIcon icon={faBars} onClick={toggleMenu}/>
                        {openMenu ? (<ul className="mobile-menu-options">
                            <li><SignInComponent /></li>
                            <li><p className="heart">Favourites</p></li>
                            <li><p className="basket">Shopping Cart</p></li>
                        </ul>) : null}
                    </div>
                </div>
            </nav>
        )
    }
};

export default Navbar;