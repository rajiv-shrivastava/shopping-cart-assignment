import React, { useState,createContext } from "react";
import { createRoot } from "react-dom/client";
import ShopNavbar from "./components/ShopNavbar/";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./error-page";
import Home from "./routes/Home/";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Products from "./routes/Products/";
import CartPage from "./routes/CartPage";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export const ShopContext = createContext()

function RootComponent(){
  const [items,setItems] = useState([])
  
  const addToCart = (val) =>{
    let allItems = items
    let present = false
    allItems.map(item => {
      if(item.id === val.id) {
        present = true
        item.qty = item.qty + 1
    }})
    if(!present){
       val.qty  = 1
        allItems.push(val)        
    }
    setItems(allItems)
  }

  return(
    <ShopContext.Provider value={{items,addToCart}}>
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
      </ShopContext.Provider>
  )
}


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootComponent />
    </BrowserRouter>
  </React.StrictMode>
);
