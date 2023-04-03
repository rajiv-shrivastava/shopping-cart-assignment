import React,{useState} from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./loginStyle.scss"

function Login() {
    const [error, setError] = useState(null);
    const [state, setState] = useState({
      email: '',
      password: '',
    });
  
    const validateEmail = (email) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };
  
    const handleChange = (e) => {
        console.log("e",e)
      const { id, value } = e.target;
      setState((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    };
  
    const handleSubmitClick = (e) => {
      e.preventDefault();
  
      if (!validateEmail(state.email)) {
        setError('Invalid Email');
      }
  
      if (state.password.length < 8) {
        setError('Password must be at least 8 chars long');
      }
  
      if (!error) {
        // No errors.
      }
    };

  return (
    <div className="container loginBox mt-4">
    <Row>
        <Col sm={{span:4,offset:2}} className="loginText">
            <h1> Login </h1>
        </Col>
      <Col sm={{span: 4}}>
        <Form>
        {error && <div style={{ color: 'red' }}>{error}</div>}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={handleChange} />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{
              borderRadius: "0px",
              padding: "10px",
              backgroundColor: "#bb2b56",
              border: "none",
            }}
            onClick={handleSubmitClick}
          >
            Login
          </Button>
        </Form>
      </Col>
    </Row>
    </div>
  );
}

export default Login;
