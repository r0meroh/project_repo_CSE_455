import React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Test from "./Test";
import Navbar2 from "./Navbar2";
// import LineChart from './LineChart';
import LineChart from "./reactChartComponents/LineChart";
import HeatMap from "./nivoComponents/HeatMap";
import LineGraph from "./nivoComponents/LineGraph";
import { Row, Col, Container } from "react-bootstrap";
const Graph = ({ data }) => {
  return (
    <>
      <Router>
        <Container fluid className="GraphPageContainer">
          <Row>
            <Col xs={12} md={2}>
              <Navbar2 />
            </Col>
            <Col xs={12} md={10} className="GraphPageCol2">
              <Switch>
                <Route path="/country">
                  <div style={{ height: 600, paddingBottom: "8.2%" }}>
                    <LineGraph />
                  </div>
                </Route>
                <Route path="/heat">
                  <div style={{ height: 400 }}>
                    <HeatMap />
                  </div>
                </Route>
                <Route path="/linechart">
                  <LineChart />
                </Route>
                <Route path="/test">
                  <Test />
                </Route>
              </Switch>
            </Col>
          </Row>{" "}
        </Container>
      </Router>
    </>
  );
};

export default Graph;
