import React from 'react';

import './App.css';
import Navbar1 from './components/Navbar';
import Landing from './components/Landing';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Graph from './components/Graph';
import About_Us from './components/About_Us';

function App() {
  const data = [
    { argument: 1, value: 100 },
    { argument: 2, value: 90 },
    { argument: 3, value: 30 },
  ];
  return (
    <Router>
      <div>
        <Navbar1 />
        <Switch>
          <Route path='/graph'>
            <Graph data={data} />
          </Route>
          <Route path='/about_us'>
            <About_Us />
          </Route>
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
