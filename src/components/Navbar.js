import React, { useState } from 'react';
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
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
const Navbar1 = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  return (
    <>
      <Navbar bg='transparent' expand='lg' variant='dark'>
        <Navbar.Brand as={NavLink} to='/'>
          <i className='fas fa-virus mr-2 '> </i>
          Covid-19 Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto navText'>
            <Nav.Link as={NavLink} to='/' exact className='NavLinkHome'>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to='/graph' exact>
              Graphs
            </Nav.Link>
            <Nav.Link as={NavLink} to='/about_us' exact>
              About Us
            </Nav.Link>
          </Nav>
          <Nav className='ml-auto navText'>
            <Nav.Link
              as={NavLink}
              to='/login'
              exact
              className='NavLinkHome'
              onClick={handleShowLogin}
            >
              <i class='fab fa-google'></i> Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal
        className='ModalForLogin'
        show={showLogin}
        onHide={handleCloseLogin}
      >
        <GoogleAuth />
      </Modal>
    </>
  );
};

export default Navbar1;
