import React from 'react';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Test from './Test';
import Navbar2 from './Navbar2';
// import LineChart from './LineChart';
import LineChart from './reactChartComponents/LineChart';
import HeatMap from './nivoComponents/HeatMap';
import LineGraph from './nivoComponents/LineGraph';
const Graph = ({ data }) => {
  return (
    <>
      <Router>
        <div>
          <Navbar2 />
          <div className='testy'>
            <Switch>
              <Route path='/country'>
                <div style={{ height: 500 }}>
                  <LineGraph />
                </div>
              </Route>
              <Route path='/heat'>
                <div style={{ height: 400 }}>
                  <HeatMap />
                </div>
              </Route>
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
  );
};

export default Graph;
