import React from "react";
import { createRoot } from "react-dom/client";
import ShopNavbar from "./components/ShopNavbar/"
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./routes/Home.js";
import Products  from "./routes/Products";
import ErrorPage from "./error-page"



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
      <BrowserRouter>
           <ShopNavbar />
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
