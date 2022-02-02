import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import { RegistrationModal } from './RegistrationModal';
import { LoginModal } from './LoginModal';
import './NavBar.css'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Reading Book Challenge</Navbar.Brand>
        <Navbar.Toggle aria-controls="navigation-bar" />
        <Navbar.Collapse id="navigation-bar">
          <Nav className="mx-auto" id="centre-nav">
            {/* <Nav.Link href="#create">Create</Nav.Link> */}
            {/* <Nav.Link href="#challenges">Challenges</Nav.Link> */}
            <Nav.Link href="#faq">FAQ</Nav.Link>
          </Nav>
          <Nav className="me-1" id="login-nav">
            <LoginModal />
            <RegistrationModal />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

