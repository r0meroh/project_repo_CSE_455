import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import TimelineIcon from '@material-ui/icons/Timeline';
import PieChartIcon from '@material-ui/icons/PieChart';
import BarChartIcon from '@material-ui/icons/BarChart';
import MapIcon from '@material-ui/icons/Map';
import DateRangeIcon from '@material-ui/icons/DateRange';

const Navbar2 = () => {
  return (
    <div className=''>
      <Navbar className=' nav2 flex-column' bg='transparent' variant='dark'>
        <div className='color'>
          <Nav.Link as={NavLink} to='/linechart' style={{ color: 'white' }}>
            <TimelineIcon style={{ fontSize: '18px', marginRight: '6px' }} />
            Line
          </Nav.Link>
          <Nav.Link as={NavLink} to='/heat' style={{ color: 'white' }}>
            <MapIcon style={{ fontSize: '18px', marginRight: '6px' }} />
            Heat
          </Nav.Link>
          <Nav.Link as={NavLink} to='/country' style={{ color: 'white' }}>
            <BarChartIcon style={{ fontSize: '18px', marginRight: '6px' }} />
            Country
          </Nav.Link>
          <Nav.Link as={NavLink} to='/calendargraph' style={{color: 'white'}}>
            <DateRangeIcon style={{ fontSize: '18px', marginRight: '6px'}} />
            Calendar
          </Nav.Link>
          <Nav className='mr-auto'></Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default Navbar2;
