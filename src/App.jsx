import './App.css';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FilterPage } from "./pages/Home/FilterPage"
import { HomePage } from "./pages/Home/HomePage"
import { SignupPage } from "./pages/Home/SignupPage";
import { FavouritesPage } from './pages/Favourites/FavouritesPage';
import BookPage from './pages/Book/BookPage';
import CartPage from './pages/Cart/CartPage';
import OrderSuccessPage from './pages/Checkout/sucess';
import OrderCancelPage from './pages/Checkout/cancel';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/filter",
    element: <FilterPage />
  },
  {
    path: "/sign-up",
    element: <SignupPage />
  },
  {
    path: "/books/:bookId",
    element: <BookPage />
  },
  {
    path: "/basket",
    element: <CartPage />
  },
  {
    path: "/favourites",
    element: <FavouritesPage />
  }
  
]);


function App() {

  return (
    <>
    <RouterProvider router={router}/>
    {/* <CartPage/> */}
    </>
  )
};

export default App;
