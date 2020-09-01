import React from 'react';

import './App.css';
import Navbar1 from './components/Navbar';
import Landing from './components/Landing';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Demographics from './components/Demographics';
function App() {
  return (
    <Router>
      <div>
        <Navbar1 />

        <Switch>
          <Route path='/demo'>
            <Demographics />
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
