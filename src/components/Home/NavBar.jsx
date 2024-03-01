// src/Components/Home/NavBar.jsx
import SignInComponent from "../Authentication/LogInModal";
import { useUser } from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";
import "../Home/NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


    const Navbar = () => {

    // You can use this function to get the user's first, last and fullName if needed
    const { isSignedIn, user } = useUser();

    if (isSignedIn) {
        return ( 
            <nav>
                <div className="navbar-logo">
                    <div className="logo"> Booksy </div>
                </div>
                <div className="navbar-categories">
                    <div className="categories"> Categories </div>
                </div>
                <div className="navbar-search">
                    <input type="text" placeholder="Search Books" />
                    {/* Add search icon if necessary */}
                </div>
                <div className="navbar-actions">
                    {/* Will display dynamically only if logged in */}
                    <p>Hello {user.firstName} </p>
                    <div className="heart">♥</div>
                    <UserButton />
                    <div className="basket">Shopping Cart</div>
                </div>
            </nav>
        )}
        else {
            return (
                <nav>
                    <div className="navbar-content">
                        <div className="navbar-logo">
                            <p> Booksy </p>
                        </div>
                        <div className="navbar-middle">
                            <input type="text" placeholder="Search Books" />
                        </div>
                        <div className="navbar-actions">
                            <SignInComponent />
                            <p className="heart">♥</p>
                            <p className="basket">Shopping Cart</p>
                        </div>
                        <div className="mobile-menu">
                            <FontAwesomeIcon icon={faBars} />
                            <ul className="mobile-menu-options">
                                <li><SignInComponent /></li>
                                <li><p className="heart">♥</p></li>
                                <li><p className="basket">Shopping Cart</p></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )}
    };

    export default Navbar;


