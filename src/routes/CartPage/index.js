import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import ImgSrc from "../../../static/images/cart.svg";
import AddSrc from "../../../static/images/add.png";
import SubtractSrc from "../../../static/images/subtract.png";
import {checkoutAction} from "../../actions/apiActions" ;
import {NotificationManager} from 'react-notifications';
import "./cartStyle.scss";
import { useSelector, useDispatch } from 'react-redux';
import { emmptyCart,selectItems } from '../../reducer/itemReducer'


function CartPage(props) {
  const [cartItems, setcartItems] = useState([]);
  const itemList = useSelector(selectItems);
  const dispatch = useDispatch()


  const checkOutOrders = ()  => {
    checkoutAction(cartItems).then(res => {      
      NotificationManager.info('Order is Placed Successfully','',2000);
      setTimeout(() => {
        dispatch(emmptyCart())
      }, 3000);
    }).catch(err => {
      alert(err)
    })
  }

  const updateQuantity = (id,action) => {
    dispatch(updateQty({prodId: id,action: action}))
  }

  const renderCart = () => {
    let productsCart = null
    if(itemList.length === 0){

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
      itemList.map(prod => productsCart.push(
      <div key={prod.id} className="cartProduct">
        <Row>
          <Col sm={4}><img src={ImgSrc} height="80px" width="80px"/></Col>
          <Col sm={4}>{prod.name}</Col>
        </Row>
        <Row>
          <Col sm={6}>
            &nbsp;
            <img src={AddSrc} height="20px" width="20px" onClick={() => updateQuantity(prod.id,'add')}/> 
              &nbsp;
              {prod.qty} 
              &nbsp;
            <img src={SubtractSrc} height="20px" width="20px" onClick={() => updateQuantity(prod.id,'delete')}/>
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
          {itemList && itemList.length && itemList.length > 0 && <button
              variant="primary"
              type="submit"
              className="shoppingBtn"
              onClick={checkOutOrders}
            >
              Proceed To Checkout
            </button>
            }
    </div>
  );
}

export default CartPage;

