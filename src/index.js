import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import ShopNavbar from "./components/ShopNavbar/";
import ShopFooter from "./components/ShopFooter/";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./error-page";
import Home from "./routes/Home/";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Products from "./routes/Products/";
import CartPage from "./routes/CartPage";
import { Provider } from "react-redux";
import store from "./store";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function RootComponent() {
  return (
    <Provider store={store}>
      <NotificationContainer />
      <ShopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ShopFooter />
    </Provider>
  );
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootComponent />
    </BrowserRouter>
  </React.StrictMode>
);
