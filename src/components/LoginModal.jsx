import {React, useState} from "react";
import { Button, Modal, Form} from "react-bootstrap";

export const LoginModal = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [id]: value,
    }));
};
const postData = async () => {
  const response = await fetch(
      `${process.env.REACT_APP_API_URL}api-token-auth/`,
      {
      method: "post",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
  }
  );
  return response.json();
};

  const handleSubmit = (event) => {
      if (credentials.username && credentials.password) {
          postData().then((response) => {
              window.localStorage.setItem("token", response.token);
              window.location = window.location.origin;
          });
      }
    setValidated(true);
  };
  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose} centered>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Enter your account details to keep track of your reading challenges.
              No account yet? <a href="# ">Sign up here!</a>
            </p>
            <Form.Group controlId="validationName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter user name"
                defaultValue=""
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validatePassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                required
                onChange={handleChange}
                aria-describedby="passwordHelpBlock"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" type="submit" onClick={handleSubmit}>
              Login!
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
