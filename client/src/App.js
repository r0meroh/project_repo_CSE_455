import React from 'react';

import './App.css';
import Navbar1 from './components/Navbar';
import Landing from './components/Landing';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Graph from './components/Graph';
import About_Us from './components/About_Us';
//import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar1 />
        <Switch>
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
      </div>
    </Router>
  );
}

export default App;
