import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import MainCompnents from "./components";
import About from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navbar/navbar";
import Product from "./components/product";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="home" element={<MainCompnents />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
