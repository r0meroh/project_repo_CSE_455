import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar1 from "./components/Navbar";
import Landing from "./components/Landing";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import Graph from "./components/Graph";
import About_Us from "./components/About_Us";
import axios from "axios";
//import { useState, useEffect } from 'react';

function App() {
  //  hold data,set data     initialization
  const [laData, setlaData] = useState([]);
  //hook or function
  useEffect(() => {
    //waits for api call to finish then proceeds
    const getData = async () => {
      let laCountyData = await axios(
        "https://data.cdc.gov/resource/k8wy-p9cg.json?county_name=Los Angeles County"
      );
      setlaData(laCountyData);
    };
    getData();
  }, [laData]); //run everytime this changes aka the county data)

  return (
    <Router>
      <div>
        <Navbar1 />
        <Switch>
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
      </div>
    </Router>
  );
}

export default App;
