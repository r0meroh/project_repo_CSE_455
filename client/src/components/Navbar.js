import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Navbar1 = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark' style={{ zIndex: 9 }}>
        <Navbar.Brand as={NavLink} to='/'>
          <i className='fas fa-virus mr-2'> </i>
          Detectives
        </Navbar.Brand>
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
        </Nav>
      </Navbar>
    </>
  );
};

export default Navbar1;
