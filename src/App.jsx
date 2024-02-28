import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage } from "./pages/Home/HomePage"
import { SignupPage } from "./pages/Home/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/sign-up",
    element: <SignupPage />
  }
]);


function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
};

export default App;
