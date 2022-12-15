import React from "react";
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';

import Home from './Pages/Home/Home';


class App extends React.Component {

  render(){
    return (
      <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/customers" element={<Customers/>} />
          <Route path="/customer/:id" element={<Customer/>} />
          <Route path="/add-customer/" element={<AddCustomer/>} />
          <Route path="/products" element={<Inventory/>} />
          <Route path="/add-product/" element={<AddProduct/>} /> */}
        </Routes>
    </Router>
      </>
    );
  }
}

export default App ;