import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import TimelineIcon from '@material-ui/icons/Timeline';
import PieChartIcon from '@material-ui/icons/PieChart';
const Navbar2 = () => {
  return (
    <div className=''>
      <Navbar className='nav2 flex-column' bg='dark' variant='dark'>
        <Navbar.Brand style={{ fontSize: '1.6rem' }}>Dashboard</Navbar.Brand>
        <div className='color'>
          <Nav.Link as={NavLink} to='/linechart' style={{ color: 'white' }}>
            <TimelineIcon style={{ fontSize: '18px', marginRight: '6px' }} />
            Line graph
          </Nav.Link>
          <Nav.Link as={NavLink} to='test' style={{ color: 'white' }}>
            <PieChartIcon style={{ fontSize: '18px', marginRight: '6px' }} />
            Pie graph
          </Nav.Link>
          <Nav className='mr-auto'></Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default Navbar2;
