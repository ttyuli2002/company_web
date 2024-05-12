import logo from '../Assets/logo.png';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {
  BrowserRouter as Router, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
  <Navbar bg="dark" data-bs-theme="dark" sticky="top">
    <Container fluid>
      <Navbar.Brand href="/" className='d-flex align-items-center"'>
        <a class="navbar-brand d-flex align-items-center" href="/">
        <img
          alt="company logo"
          src= {logo}
          width="auto"
          height="40"
          className="d-inline-block align-top"
        />
        <span class="mx-2 h3">
          紫道弘益
        </span>
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='NavScroll' data-bs-target="#NavScroll" />
      <Navbar.Collapse id='NavScroll'>
        <Nav className= 'ms-4 fs-4 d-flex justify-content-evenly' style={{ width: '100%' }}>
          <Nav.Link as={Link} to="/" exact>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/About">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/Product">
            Product
          </Nav.Link>
          <Nav.Link as={Link} to="/Contact">
            Contact
          </Nav.Link>
        </Nav>        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;