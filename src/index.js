import React, { useState } from "react";
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
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

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
    console.log(items)
    setItems(allItems)
  }

  const emptyCart = () => {
    setItems([])
  }

  return(
    <>
    <NotificationContainer/>
    <ShopNavbar items={items}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/products" element={<Products addToCart={addToCart}/>} />
        <Route path="/cart" element={<CartPage items={items} emptyCart={emptyCart}/>} />
        <Route path="*" element={<ErrorPage />} />        
      </Routes>
      </>
  )
}


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootComponent />
    </BrowserRouter>
  </React.StrictMode>
);
