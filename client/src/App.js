import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar1 from './components/Navbar';
import Landing from './components/Landing';
import Test from './components/Test';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Graph from './components/Graph';
import About_Us from './components/About_Us';
import LineGraph from './components/nivoComponents/LineGraph';
import LineChart from './components/reactChartComponents/LineChart';

//import { useState, useEffect } from 'react';

function App() {
  return (
    <Router>
      <Navbar1 />
      <Switch>
        <Route path='/country'>
          <div style={{ height: 400, marginTop: '10%', paddingBottom: '10' }}>
            <LineGraph />
          </div>
        </Route>
        <Route path='/graph'>
          <Graph />
        </Route>
        <Route path='/about_us'>
          <About_Us />
        </Route>
        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
