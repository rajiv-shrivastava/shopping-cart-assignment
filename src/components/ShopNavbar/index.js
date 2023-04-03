import React from 'react';
import {Container,Nav,Navbar,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Logo from "../../../static/images/logo.png"
import CartImg from "../../../static/images/cart.svg"
import "./style.scss"

function ShopNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#"><img src={Logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             <Link to="/" className="navLink">Home </Link>
              <Link to="/products" className="navLink">Products</Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">           
             <Row>
              <Col sm={6}><Link to="/login" className="navLink">Sign In </Link></Col>
              <Col sm={6}><Link to="/register" className="navLink">Register </Link></Col>
              <Col sm={12} style={{background: "#E8E8E8",padding: "10px",width: "50%"}}><img src={CartImg} height="30px" width="30px"/> {0} Items</Col>
            </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ShopNavbar;