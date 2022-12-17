import React from "react";
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';

import Home from './Pages/Home/Home';
import Customers from './Pages/Customer/Customers';
import Products from "./Pages/Product/Products";
import Orders from "./Pages/Order/Orders";

class App extends React.Component {

  render(){
    return (
      <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/customers" element={<Customers/>} />
          <Route exact path="/products" element={<Products/>} />
          <Route exact path="/orders" element={<Orders />} />
        </Routes>
    </Router>
      </>
    );
  }
}

export default App ;