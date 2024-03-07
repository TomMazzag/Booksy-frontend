import './App.css';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FilterPage } from "./pages/Filter/FilterPage"
import { HomePage } from "./pages/Home/HomePage"
import { SignupPage } from "./pages/Home/SignupPage";
import { FavouritesPage } from './pages/Favourites/FavouritesPage';
import { AccountPage } from './pages/Account/AccountPage';
import BookPage from './pages/Book/BookPage';

import { SearchPage } from './pages/Search/SearchPage';

import BasketPage from './pages/Basket/BasketPage';
import OrderSuccessPage from './pages/Checkout/SuccessPage';
import OrderCancelPage from './pages/Checkout/CancelPage';




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
    path: '/books/search/author/:author',
    element: <SearchPage />
  },
  {
    path: '/books/search/title/:title',
    element: <SearchPage />
  },
  {
    path: "/basket",
    element: <BasketPage />
  },
  {
    path: "/favourites",
    element: <FavouritesPage />
  },
  {
    path: "/settings",
    element: <AccountPage />
  },
  {
    path: "/success", // Add route for the success page
    element: <OrderSuccessPage />
  },
  {
    path: "/cancel", // Add route for the cancel page
    element: <OrderCancelPage />
  },
]);


function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
};

export default App;
