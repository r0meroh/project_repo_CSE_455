import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar1 from "./components/Navbar";
import Landing from "./components/Landing";
import Test from "./components/Test";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Graph from "./components/Graph";
import About_Us from "./components/About_Us";
import axios from "axios";
//import { useState, useEffect } from 'react';

function App() {
  //  hold data,set data     initialization
  const [laData, setlaData] = useState([]);
  const [deaths, setDeaths] = useState([]);
  //hook or function
  useEffect(() => {
    //waits for api call to finish then proceeds
    const getData = async () => {
      let laCountyData = await axios(
        "https://data.cdc.gov/resource/k8wy-p9cg.json?county_name=Los Angeles County"
      );

      setlaData(laCountyData.data); //Pass in the data
      //console.log(laCountyData.data);
    };

    getData();
  }, []); //Leave this blank for one pass, only pass hold data if u want to run multiple times under a constraint

  return (
    <Router>
      <Navbar1 />
      <Switch>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/graph">
          <Graph data={laData} />
        </Route>
        <Route path="/about_us">
          <About_Us />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
