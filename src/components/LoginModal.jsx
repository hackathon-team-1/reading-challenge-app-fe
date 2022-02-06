import  React, { useState } from "react";
import { Button, Modal, Form} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const LoginModal = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [show, setShow] = useState(false);

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

const doLogin = (e) => {
  e.preventDefault();
  if (credentials.username && credentials.password) {
      postData().then((response) => {
          window.localStorage.setItem("token", response.token);
          navigate("/user-challenge");
          window.location.reload(true)
      });
  }
  handleClose();
}
  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose} centered>
      <Form onSubmit={doLogin}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Enter your account details to keep track of your reading challenges.
              {/* -----------------use router to redirect to RegistrationModal.jsx */}
              No account yet? <a href="# ">Sign up here!</a>
            </p>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                id= "username"
                type="text"
                placeholder="Enter user name"
                defaultValue=""
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
              id="password"
                type="password"
                placeholder="Enter password"
                required
                onChange={handleChange}
                aria-describedby="passwordHelpBlock"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" type="submit" onClick={doLogin}>
              Login!
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
export default LoginModal;