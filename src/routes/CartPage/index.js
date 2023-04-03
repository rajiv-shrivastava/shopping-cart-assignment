import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import {loginAction} from "../../actions/apiActions"


function CartPage() {
  const [emailError, setEmailError] = useState([]);
  const [passwordError, setPasswordError] = useState([]);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    let checkEmail = validateEmail(state.email);
    !checkEmail ? setEmailError("Email is Invalid") : setEmailError("");
    let checkPassword = state.password.length < 8;
    checkPassword
      ? setPasswordError("Password must be 8 characters long")
      : setPasswordError("");
    console.log("checkPassword", state.password.length, passwordError);
    if (checkEmail && !checkPassword) {
      // No errors.
      loginAction(state).then(res => 
        {
          console.log("logged in",res)
          sessionStorage.setItem('USERNAME',res.data.user)
          sessionStorage.setItem('AUTH_TOKEN',res.data.token)
        console.log(`Unable to login ${err}`)
       })
    }
  };

  const renderError = (err) => {
    return err && err.length > 0 ? (
      <div style={{ color: "red" }}>{err}</div>
    ) : (
      ""
    );
  };

  return (
    <div className="container loginBox mt-4">
      <Row>
        <Col sm={{ span: 4, offset: 2 }}>
          <h1> Cart Page</h1>
        </Col>
      </Row>
    </div>
  );
}

export default CartPage;