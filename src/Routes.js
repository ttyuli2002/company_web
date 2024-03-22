import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Product from './Component/Product';
import Contact from './Component/Contact';

const All_Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Product" element={<Product />} />
      </Route>
    </Routes>
  );
}


export default All_Routes;