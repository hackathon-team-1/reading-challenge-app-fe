import {React, useState} from "react";
// import { useNavigate } from "react-router-dom"
import { Button, Modal, Form} from "react-bootstrap";

export const RegistrationModal = () => {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // ----------------signup logic ---------------

  const [userInfo, setUser] = useState({
    username:"",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    let { id, value } = e.target;

    if (id === "validationName") {
      setUser((prev) => {
      return { ...prev, username: value };
      });
      } 
      
    else if (id === "validatePassword") {
      setUser((prev) => {
      return {...prev, password: value };
      });
      } 
      
    else if (id === "validationEmail") {
        setUser((prev) => {
          return {...prev, email: value };
        });
      }
  };

  const postData = async() => {
    setUser(userInfo)
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}users/`, 
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(userInfo)
      }
    );
    
    return response.json();
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      event.preventDefault();
      postData()
            .then((response) => {
                console.log('------response from my API --------', response)
                // navigate("/");
            })
            handleClose();
    };
    setValidated(true);
  };
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Get Started
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Create an account to keep track of your reading challenges.
              Already have an account? <a href="# ">Log in here!</a>
            </p>
            <Form.Group controlId="validationName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter user name"
                onChange={handleChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
              type="email"
              placeholder="Enter email" 
              required 
              onChange={handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="validatePassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                required
                aria-describedby="passwordHelpBlock"
                onChange={handleChange}
              />
              <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </Form.Text>
            </Form.Group>
            {/* <Form.Group>
              <Form.Label>Challenge</Form.Label>
              <Form.Select aria-label="Join a challenge">
                <option>Join a challenge</option>
                <option value="1">Book Riot Read Harder 2022</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" type="submit">
              Get Started!
            </Button>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Agree to Terms & Conditions"
                required
              />
            </Form.Group>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};