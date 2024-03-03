// // src/Components/Home/NavBar.jsx
// import SignInComponent from "../Authentication/LogInModal";
// import { useUser } from "@clerk/clerk-react";
// import { UserButton } from "@clerk/clerk-react";
// import "../Home/NavBar.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons'


//     const Navbar = () => {

//     // You can use this function to get the user's first, last and fullName if needed
//     const { isSignedIn, user } = useUser();

//     if (isSignedIn) {
//         return ( 
//             <nav>
//                 <div className="navbar-logo">
//                     <div className="logo"> Booksy </div>
//                 </div>
//                 <div className="navbar-categories">
//                     <div className="categories"> Categories </div>
//                 </div>
//                 <div className="navbar-search">
//                     <input type="text" placeholder="Search Books" />
//                     {/* Add search icon if necessary */}
//                 </div>
//                 <div className="navbar-actions">
//                     {/* Will display dynamically only if logged in */}
//                     <p>Hello {user.firstName} </p>
//                     <div className="heart">♥</div>
//                     <UserButton />
//                     <div className="basket">Shopping Cart</div>
//                 </div>
//             </nav>
//         )}
//         else {
//             return (
//                 <nav>
//                     <div className="navbar-content">
//                         <div className="navbar-logo">
//                             <p> Booksy </p>
//                         </div>
//                         <div className="navbar-middle">
//                             <input type="text" placeholder="Search Books" />
//                         </div>
//                         <div className="navbar-actions">
//                             <SignInComponent />
//                             <p className="heart">♥</p>
//                             <div className="navbar-icon">🛒<span className="cart-count">1</span></div>
//                         </div>
//                         <div className="mobile-menu">
//                             <FontAwesomeIcon icon={faBars} />
//                             <ul className="mobile-menu-options">
//                                 <li><SignInComponent /></li>
//                                 <li><p className="heart">♥</p></li>
//                                 <li><p className="basket">Shopping Cart</p></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>
//             )}
//     };

//     export default Navbar;





import React from 'react';
import SignInComponent from "../Authentication/LogInModal";
import { useUser } from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";
import "../Home/NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Make sure this is imported

const Navbar = () => {
    const { isSignedIn, user } = useUser();

    // Assuming you have a hook/context to fetch the cart count
    const cartCount = 2; // Replace 0 with the actual logic to get the cart count

    if (isSignedIn) {
        return ( 
            <nav>
                <div className="navbar-logo">
                    {/* Wrap the logo with Link to navigate to "/" */}
                    <Link to="/" className="logo"> Booksy </Link>
                </div>
                <div className="navbar-categories">
                    <div className="categories"> Categories </div>
                </div>
                <div className="navbar-search">
                    <input type="text" placeholder="Search Books" />
                </div>
                <div className="navbar-actions">
                    <p>Hello {user.firstName} </p>
                    <div className="heart">♥</div>
                    <UserButton />
                    {/* Wrap Shopping Cart text with Link and update count dynamically */}
                    <Link to="/basket" className="basket">Shopping Cart <span className="cart-count">{cartCount}</span></Link>
                </div>
            </nav>
        );
    } else {
        return (
            <nav>
                <div className="navbar-content">
                    <div className="navbar-logo">
                        {/* Wrap the logo with Link to navigate to "/" */}
                        <Link to="/" className="logo"> Booksy </Link>
                    </div>
                    <div className="navbar-middle">
                        <input type="text" placeholder="Search Books" />
                    </div>
                    <div className="navbar-actions">
                        <SignInComponent />
                        <p className="heart">♥</p>
                        {/* Wrap Shopping Cart icon with Link and update count dynamically */}
                        <Link to="/basket" className="navbar-icon">🛒<span className="cart-count">{cartCount}</span></Link>
                    </div>
                    <div className="mobile-menu">
                        <FontAwesomeIcon icon={faBars} />
                        <ul className="mobile-menu-options">
                            <li><SignInComponent /></li>
                            <li><p className="heart">♥</p></li>
                            {/* Wrap Shopping Cart text with Link in mobile menu and update count dynamically */}
                            <li><Link to="/basket" className="basket">Shopping Cart <span className="cart-count">{cartCount}</span></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};

export default Navbar;
