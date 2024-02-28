// src/Components/Home/NavBar.jsx

import "../Home/NavBar.css";


    const Navbar = () => {
    return (
        <nav className="navbar">
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
            {/* Replace the placeholders with actual paths to your icons or components */}
            <div className="sign-in">Sign In</div>
            <div className="profile">👤</div>
            <div className="heart">♥</div>
            <div className="navbar-icon">🛒<span className="cart-count">1</span></div>

        </div>
        </nav>
    );
    };

    export default Navbar;






// const Navbar = () => {
//     const navigate = useNavigate();
//     const id = window.localStorage.getItem("id")

//     const profilePage = () => {
//         navigate(`/profile/${id}`);
//     };

//     const home = () => {
//         navigate("/posts");
//     };

//     const shoppingBasket = () => {
//         navigate("/basket");
//     };

//     const favouriteBooks = () => {
//         navigate(`/favourites/${id}`);
//     };

//     const signIn = () => {
//         navigate("/signIn");
//     };

//     return (
//         <nav>
//             <div onClick={home}>
//                 <p>Booksy</p>
//             </div>
//             <div>
//                 <button onClick={home}>Home</button>
//                 <button onClick={profilePage}>Profile</button>
//                 <button onClick={shoppingBasket}>Shopping Basket</button>
//                 <button onClick={favouriteBooks}>Favourite Books</button>
//                 <button onClick={signIn}>Sign In</button>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
