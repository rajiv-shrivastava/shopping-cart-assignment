import React from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../static/images/logo.png";
import CartImg from "../../../static/images/cart.svg";
import "./shopNavbarstyle.scss";
import {isLoggedIn} from "../../actions/apiActions"

function ShopNavbar() {
  const loggedIn = isLoggedIn();
  return (
    <div id="shoppingNavbar">
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="navLink">
              Home{" "}
            </Link>
            <Link to="/products" className="navLink">
              Products
            </Link>
          </Nav>
        </Navbar.Collapse>
         <Navbar.Collapse className="justify-content-end">         
          <Row>
          {!loggedIn?<>
            <Col sm={6}>
              <Link to="/login" className="navLink">
                Sign In{" "}
              </Link>
            </Col>
            <Col sm={6}>
              <Link to="/register" className="navLink">
                Register{" "}
              </Link>
            </Col>
            </>:
            <Link to="/cart" className="navLink">
            <Col sm={12}>
              <div><img src={CartImg} height="30px" width="30px" /> {0} Items</div>
            </Col>
            </Link>
            }
          </Row>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default ShopNavbar;
