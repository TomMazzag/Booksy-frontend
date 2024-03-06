// // src/Components/Home/NavBar.jsx
import SignInComponent from "../Authentication/LogInModal";
import { useUser } from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";
import "../Home/NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Make sure this is imported
import { useState } from "react";



const Navbar = () => {
    const navigate = useNavigate();
    const { isSignedIn, user } = useUser();
    const [openMenu, setOpenMenu] = useState(false)

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
                        <input type="text" placeholder="Search Books by Title or Author " />
                    </div>
                    <div className="navbar-actions">
                        <p>Hello {user.firstName} </p>
{/* //                         <p className="heart">♥</p> */}
                        <p className="heart" onClick={() => navigate('/favourites')}>♥</p>
                        <UserButton />
                        <p className="basket"onClick={() => navigate('/basket')}>Cart</p>
                    </div>
                    <div className="mobile-menu">
                        <FontAwesomeIcon icon={faBars} onClick={toggleMenu}/>
                        {openMenu ? (<ul className="mobile-menu-options">
                            <li>Hello {user.firstName}</li>
{/* //                             <li><p className="heart">Favourites</p></li> */}
                            <li><p className="heart" onClick={() => navigate('/favourites')}>Favourites</p></li>
                            <li><p className="basket"onClick={() => navigate('/basket')}>Shopping Cart</p></li>
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
{/* //                         <p className="heart">♥</p> */}
                        <p className="heart" onClick={() => navigate('/favourites')}>♥</p>
                        <p className="basket"onClick={() => navigate('/basket')}>Cart</p>
                    </div>
                    <div className="mobile-menu">
                        <FontAwesomeIcon icon={faBars} onClick={toggleMenu}/>
                        {openMenu ? (<ul className="mobile-menu-options">
                            <li><SignInComponent /></li>
                            <li><p className="heart">Favourites</p></li>
                            <li><p className="basket"onClick={() => navigate('/basket')}>Shopping Cart</p></li>
                        </ul>) : null}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;