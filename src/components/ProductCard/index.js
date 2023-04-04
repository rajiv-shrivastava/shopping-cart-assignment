import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import ImgSrc from "../../../static/images/cart.svg"
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../actions/apiActions";
import { NotificationManager } from "react-notifications";
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, deleteProduct,selectItems } from '../../reducer/itemReducer'

export default function ProductCard(props) {
  const loggedIn = isLoggedIn();
  let navigate = useNavigate();
  const items = useSelector(selectItems);
  const addToCart = (val) =>{
    dispatch(addProduct(val))
  }

  const emptyCart = () => {
    setItems([])
  }

  const updateCartItem = (itemDesc) => {
    if(loggedIn){
      addToCart(itemDesc)
    }
    else{
      NotificationManager.warning('Please log in first to order');
      return navigate("/login");
    }    
  }


  const dispatch = useDispatch()

  const renderCols = () => {    
    let colData = (
      <>
        <Col sm={4}>
          {" "}
          <img src={ImgSrc}  height="150px" width="150px" />
        </Col>
        <Col sm={8}>
          <Card.Title>{props.categoryData.name}</Card.Title>
          <Card.Text style={{ fontSize: "12px", fontWeight: "500" }}>
            {props.categoryData.description}
          </Card.Text>
          <Card.Text className="mb-2">
            <Button
              style={{
                borderRadius: "0px",
                padding: "10px",
                backgroundColor: "#bb2b56",
                border: "none",
              }}
              onClick={() => updateCartItem(props.categoryData)}
            >
              {" "}
              Buy Now @ {props.categoryData.price}
            </Button>
          </Card.Text>
        </Col>
      </>
    );
    return colData;
  };

  return (
    <>
      <Card
        style={{
          width: "100%",
          margin: "10px",
          height: "200px",
          border: "0px",
          boxShadow: "0px 2px 1px 0px grey",
        }}
      >
        <Card.Body>
          <Row>{renderCols()}</Row>
        </Card.Body>
      </Card>
    </>
  );
}
