import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./loginStyle.scss";
import { loginAction } from "../../actions/apiActions";

function Login() {
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
    if (checkEmail && !checkPassword) {
      // No errors.
      loginAction(state)
        .then((res) => {
          sessionStorage.setItem("USERNAME", res.data.user);
          sessionStorage.setItem("AUTH_TOKEN", res.data.token);
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
    <div className="container loginBox mt-4 mb-4">
      <Row>
        <Col sm={{ span: 4, offset: 2 }}>
          <h1> Sign In </h1>
        </Col>
        <Col sm={{ span: 4 }}>
          <Form>
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
            <button
              variant="primary"
              type="submit"
              className="submitBtn"
              onClick={(e) => handleSubmitClick(e)}
            >
              Login
            </button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
