import React from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Navbar1 = () => {
  return (
    <>
      <Navbar bg='light' fixed='top' expand='lg' className='Navbar'>
        <Navbar.Brand as={NavLink} to='/'>
          <i className='fas fa-virus mr-2'> </i>
          Forecast Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link as={NavLink} to='/' exact>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to='/graph' exact>
              Graphs
            </Nav.Link>
            <Nav.Link as={NavLink} to='/about_us' exact>
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} to='/country' exact>
              country
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navbar1;
