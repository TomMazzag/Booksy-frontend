// src/App.jsx

// import { useState } from 'react'


import { HomePage } from "./Home/HomePage"
import { CartPage } from "./Cart/CartPage.jsx"

function App() {
  

  return (
    <>
    {/* <HomePage/> */}
    <CartPage/>
    </>
  )
}

export default App



// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import HomePage from './Home/HomePage';
// import CartPage from './Cart/CartPage'; 

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Switch>
//           <Route path="/" exact component={HomePage} />
//           <Route path="/cart" component={CartPage} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
