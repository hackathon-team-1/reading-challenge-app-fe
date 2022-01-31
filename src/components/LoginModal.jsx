import {React, useState} from "react";
import { Button, Modal, Form} from "react-bootstrap";

export const LoginModal = () => {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
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
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validatePassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                required
                aria-describedby="passwordHelpBlock"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" type="submit">
              Login!
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
