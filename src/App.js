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
          <Route path="/" element={<Home/>} />
          <Route path="/customers" element={<Customers/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
    </Router>
      </>
    );
  }
}

export default App ;