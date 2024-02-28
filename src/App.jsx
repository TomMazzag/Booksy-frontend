// src/App.jsx

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from './Components/Home/NavBar'
import { FilterPage } from "./pages/Home/FilterPage"
import { HomePage } from "./pages/Home/HomePage"
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/FilterPage",
    element: <FilterPage />,
  },
]);


const App = () => {
  return (
    <>
      {/* Provide the router to your app */}
      <RouterProvider router={router} />
    </>
  );
};
export default App;