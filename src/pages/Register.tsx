import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { StyledFormWrapper } from "./Login";

const Register = () => {
  return (
    <StyledFormWrapper>
      <p className="head-text">
        {" "}
        <div className="box"></div>Create Account
      </p>
      <Form>
        <Form.Group controlId="formText">
          <Form.Label>FirstName</Form.Label>
          <Form.Control type="text" placeholder="Input value" />
        </Form.Group>
        <Form.Group controlId="formText">
          <Form.Label>Surname</Form.Label>
          <Form.Control type="text" placeholder="Input value" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Input value" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Input value" />
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Log In
        </Button>
        <p>
          <a href="/register">Create an account</a>
        </p>
      </Form>
    </StyledFormWrapper>
  );
};

export default Register;
