import React from 'react';
import Card from './Card';
import PieChart from './PieChart';
import { Paper } from '@material-ui/core';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  PieSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from 'react-bootstrap';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Test from './Test';
import Navbar2 from './Navbar2';
import LineChart from './LineChart';

const Graph = ({ data }) => {
  const first = [data];
  console.log(first); // The very first
  return (
    <>
      <Router>
        <div>
          <Navbar2 />
          <div className='testy'>
            <Switch>
              <Route path='/linechart'>
                <LineChart />
              </Route>
              <Route path='/test'>
                <Test />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>

    // i is for every object in the data, so for us we have 3, one for each indicator
    // Each object needs a unique factor, hence why i.indicator
    // <>
    //   {data.map((i) => (
    //     <div className='column'>
    //       <div className='container'>
    //         <Card key={i.indicator} data={i}>
    //           {' '}
    //         </Card>
    //       </div>
    //     </div>
    //   ))}

    //   <PieChart data={data}></PieChart>
    // </>
  );
};

export default Graph;
