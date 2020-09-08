import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Navbar1 = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>Detectives</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link as={NavLink} to='/' exact>
            {' '}
            Home{' '}
          </Nav.Link>
          <Nav.Link as={NavLink} to='/graph' exact>
            graph
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navbar1;
