import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Test from "./components/Test";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Graph from "./components/Graph";
import About_Us from "./components/About_Us";
import LineGraph from "./components/nivoComponents/LineGraph";
import LineChart from "./components/reactChartComponents/LineChart";
import NewLanding from "./components/LandingFinal";
import NewAboutUs from "./components/AboutUsFinal";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/graph">
          <Graph />
        </Route>
        <Route path="/about_us">
          <NewAboutUs />
        </Route>
        <Route path="/">
          <NewLanding />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
