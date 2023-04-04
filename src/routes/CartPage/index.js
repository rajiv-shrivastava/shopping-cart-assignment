import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import "./cartStyle.scss";

function CartPage() {
  const [cartItems, setcartItems] = useState([]);

  const renderCart = () => {
    let productsCart = null
    if(cartItems.length === 0){

      productsCart = 
      <div className="emptyCartDiv">
          <div className="text1"> 
                <Row>
                  <Col sm={12}>
                    <b>No items in your cart</b>
                  </Col>
                  <Col sm={12}>
                      Your favorite items are just a click away
                  </Col>
                  </Row>
          </div>
          <div className="text2 mb-4">
            <Link to="/"><button className="shoppingBtn"> Start Shopping</button></Link>
          </div>
      </div>
    }
    else{

    }
    return productsCart
  }
  

  return (
    <div className="container">
          {renderCart()}
    </div>
  );
}

export default CartPage;

