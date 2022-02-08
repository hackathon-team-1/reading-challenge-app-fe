import { React, useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { RegistrationModal } from './RegistrationModal';
import { LoginModal } from './LoginModal';
import './NavBar.css'

const NavBar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('token'))

  const logout = () => {
    localStorage.setItem('token', null)
    navigate('/reading-challenge-app-fe')
    setToken(null)
  }

  const goHome = () => {
    navigate('/reading-challenge-app-fe')
  }
    return (
    <Navbar expand="lg" sticky="top">
      <Container>
        <Navbar.Brand onClick={goHome}>Reading Book Challenge</Navbar.Brand>
        <Navbar.Toggle aria-controls="navigation-bar" />
        <Navbar.Collapse id="navigation-bar">
          <Nav className="mx-auto" id="centre-nav">
            {/* ---------------------- hidden links for future implementation --------------------- */}
            {/* <Nav.Link href="#create">Create</Nav.Link> */}
            {/* <Nav.Link href="#challenges">Challenges</Nav.Link> */}
            {/* <Nav.Link href="#faq">FAQ</Nav.Link> */}
          </Nav>
          <Nav className="me-1" id="login-nav">
          {
            ! token || token === "null"
            ? <div>
              <LoginModal />
              <RegistrationModal />
            </div>
            : <div>
              <Button variant="dark" onClick={logout}>
                Logout
              </Button>
            </div>
          }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

