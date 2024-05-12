import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from './Product';
import Contact from './Contact';

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