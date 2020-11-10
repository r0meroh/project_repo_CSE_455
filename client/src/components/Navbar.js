import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
  NavDropdown,
  Modal,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Navbar1 = () => {
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  return (
    <>
      <Navbar bg="transparent" expand="lg" variant="dark">
        <Navbar.Brand as={NavLink} to="/">
          <i className="fas fa-virus mr-2"> </i>
          Forecast Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto navText">
            <Nav.Link as={NavLink} to="/" exact className="NavLinkHome">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/graph" exact>
              Graphs
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about_us" exact>
              About Us
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto navText">
            <Nav.Link
              as={NavLink}
              to="/signup"
              exact
              className="NavLinkHome"
              onClick={handleShow}
            >
              Sign Up
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/login"
              exact
              className="NavLinkHome"
              onClick={handleShowLogin}
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>Welcome to the Sign Up...</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>Welcome to the Sign In...</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogin}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbar1;
