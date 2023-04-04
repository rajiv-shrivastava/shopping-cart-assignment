import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import ImgSrc from "../../../static/images/cart.svg";
import AddSrc from "../../../static/images/add.png";
import SubtractSrc from "../../../static/images/subtract.png";
import {checkoutAction} from "../../actions/apiActions" ;
import {NotificationManager} from 'react-notifications';

import "./cartStyle.scss";

function CartPage(props) {
  const [cartItems, setcartItems] = useState([]);

  const checkOutOrders = ()  => {
    checkoutAction(cartItems).then(res => {      
      NotificationManager.info('Order is Placed Successfully');
      setTimeout(() => {
        props.emptyCart([])
      }, 3000);
    }).catch(err => {
      alert(err)
    })
  }

  const renderCart = () => {
    let productsCart = null
    if(props.items.length === 0){

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
      productsCart = []
      props.items.map(prod => productsCart.push(
      <div key={prod.id} className="cartProduct">
        <Row>
          <Col sm={4}><img src={ImgSrc} height="80px" width="80px"/></Col>
          <Col sm={4}>{prod.name}</Col>
        </Row>
        <Row>
          <Col sm={6}>
            &nbsp;
            <img src={AddSrc} height="20px" width="20px"/> 
              &nbsp;
              {prod.qty} 
              &nbsp;
            <img src={SubtractSrc} height="20px" width="20px"/>
             <span className="mt-1">  * {prod.price} </span>
            </Col>
            <Col sm={6}>
              Rs {prod.qty * prod.price}
            </Col>
        </Row>
        </div>)) 
    }
    return productsCart
  }
  

  return (
    <div className="container">
          {renderCart()}
          <button
              variant="primary"
              type="submit"
              className="shoppingBtn"
              onClick={checkOutOrders}
            >
              Proceed To Checkout
            </button>
    </div>
  );
}

export default CartPage;

