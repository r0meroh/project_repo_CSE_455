import React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Test from "./Test";
import Navbar2 from "./Navbar2";
import PieChart from "./nivoComponents/PieChart";
import LineChart from "./reactChartComponents/LineChart";
import HeatMap from "./nivoComponents/HeatMap";
import BubbleGraph from "./nivoComponents/BubbleGraph";

import LineGraph from "./nivoComponents/LineGraph";
import CalendarGraph from "./nivoComponents/CalendarGraph";
import { Row, Col, Container } from "react-bootstrap";
const Graph = ({ data }) => {
  return (
    <>
      <Router>
        <Container fluid className="GraphPageContainer">
          <Row>
            <Col sm={12} md={1}>
              <Navbar2 />
            </Col>
            <Col sm={12} md={10} className="GraphPageCol2">
              <Switch>
                <Route path="/bubble">
                  <div
                    style={{
                      height: 600,
                    }}
                  >
                    <BubbleGraph />
                  </div>
                </Route>

                <Route path="/piechart">
                  <div
                    style={{
                      height: 600,
                    }}
                  >
                    <PieChart />
                  </div>
                </Route>

                <Route path="/calendargraph">
                  <div
                    style={{
                      height: 700,
                    }}
                  >
                    <CalendarGraph />
                  </div>
                </Route>
                <Route path="/country">
                  <div
                    style={{
                      height: 700,
                      paddingBottom: "11.1%",
                    }}
                  >
                    <LineGraph />
                  </div>
                </Route>
                <Route path="/heat">
                  <div style={{ height: 450 }}>
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
