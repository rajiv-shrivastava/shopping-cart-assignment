import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./registerStyle.scss";
import { registerAction } from "../../actions/apiActions";
import { NotificationManager } from "react-notifications";

function Register() {
  const [emailError, setEmailError] = useState([]);
  const [passwordError, setPasswordError] = useState([]);
  const [confirmPasswordError, setconfirmPasswordError] = useState([]);
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
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

    let checkconfirmPasswordError = (state.password !== state.confirmPassword);
    checkconfirmPasswordError ?
     setconfirmPasswordError("Confirm Password must same as password")
      : setconfirmPasswordError("");

    
      
    if (checkEmail && !checkPassword &&(state.password === state.confirmPassword)) {
      // No errors.
      registerAction(state)
        .then((res) => {
          NotificationManager.success('User is registered','',2000)
        })
        .catch((err) => {
          alert(`Unable to login ${err}`);
        });
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
    <div className="container registerBox mt-4 mb-4">
      <Row>
        <Col sm={{ span: 4, offset: 2 }}>
          <h1> Signup </h1>
        </Col>
        <Col sm={{ span: 4 }}>
          <Form>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>FirstName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter firstname"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter lastname"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
              />
              {renderError(emailError)}
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
              {renderError(passwordError)}
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
              {renderError(confirmPasswordError)}
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{
                borderRadius: "0px",
                padding: "10px",
                backgroundColor: "#bb2b56",
                border: "none",
                width: "100%",
              }}
              onClick={handleSubmitClick}
            >
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
