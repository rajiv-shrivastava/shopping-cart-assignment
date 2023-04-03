import React from "react";
import { createRoot } from "react-dom/client";
import ShopNavbar from "./components/ShopNavbar/";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Products from "./routes/Products/";
import ErrorPage from "./error-page";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
