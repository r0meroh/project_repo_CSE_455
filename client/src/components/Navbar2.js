import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import TimelineIcon from "@material-ui/icons/Timeline";
import PieChartIcon from "@material-ui/icons/PieChart";
import BarChartIcon from "@material-ui/icons/BarChart";
import MapIcon from "@material-ui/icons/Map";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";

import DateRangeIcon from "@material-ui/icons/DateRange";

const Navbar2 = () => {
  return (
    <div className="">
      <Navbar className=" nav2 flex-column" bg="transparent" variant="dark">
        <div className="color">
          <Row>
            <Col xs={6} sm={6} md={6} style={{ paddingRight: "0" }}>
              <Nav.Link
                as={NavLink}
                to="/linechart"
                style={{
                  color: "white",
                  paddingRight: "0",

                  marginLeft: "0%",
                }}
              >
                <TimelineIcon style={{ fontSize: "24px" }} />
              </Nav.Link>
            </Col>
            <Col xs={6} sm={6} md={6} style={{ paddingLeft: "0" }}>
              <Nav.Link
                as={NavLink}
                to="/linechart"
                style={{
                  color: "white",
                  paddingLeft: "0",
                  marginLeft: "10%",
                }}
              >
                Line
              </Nav.Link>
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={6} md={6} style={{ paddingRight: "0" }}>
              <Nav.Link
                as={NavLink}
                to="/heat"
                style={{
                  color: "white",
                  paddingRight: "0",
                  marginLeft: "0%",
                }}
              >
                <MapIcon style={{ fontSize: "20px" }} />
              </Nav.Link>
            </Col>
            <Col xs={6} sm={6} md={6} style={{ paddingLeft: "0" }}>
              <Nav.Link
                as={NavLink}
                to="/heat"
                style={{
                  color: "white",
                  paddingLeft: "0",
                  marginLeft: "10%",
                }}
              >
                HeatMap
              </Nav.Link>
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={6} md={6} style={{ paddingRight: "0" }}>
              <Nav.Link
                as={NavLink}
                to="/country"
                style={{
                  color: "white",
                  paddingRight: "1%",
                  marginLeft: "0%",
                }}
              >
                <BarChartIcon style={{ fontSize: "24px" }} />
              </Nav.Link>
            </Col>
            <Col xs={6} sm={6} md={6} style={{ paddingLeft: "0" }}>
              <Nav.Link
                as={NavLink}
                to="/country"
                style={{
                  color: "white",
                  paddingLeft: "0",
                  marginLeft: "10%",
                }}
              >
                Country
              </Nav.Link>
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={6} lg={6} style={{ paddingRight: "0" }}>
              <Nav.Link
                as={NavLink}
                to="/calendargraph"
                style={{
                  color: "white",
                  paddingRight: "1%",
                  marginLeft: "0%",
                }}
              >
                <DateRangeIcon style={{ fontSize: "24px" }} />
              </Nav.Link>
            </Col>
            <Col xs={6} sm={6} md={6} style={{ paddingLeft: "0" }}>
              <Nav.Link
                as={NavLink}
                to="/calendargraph"
                style={{
                  color: "white",
                  paddingLeft: "0",
                  marginLeft: "10%",
                }}
              >
                Calendar
              </Nav.Link>
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={6} lg={6} style={{ paddingRight: "0" }}>
              <Nav.Link
                as={NavLink}
                to="/piechart"
                style={{
                  color: "white",
                  paddingRight: "1%",
                  marginLeft: "0%",
                }}
              >
                <PieChartIcon style={{ fontSize: "24px" }} />
              </Nav.Link>
            </Col>
            <Col xs={6} sm={6} md={6} style={{ paddingLeft: "0" }}>
              <Nav.Link
                as={NavLink}
                to="/piechart"
                style={{
                  color: "white",
                  paddingLeft: "0",
                  marginLeft: "10%",
                }}
              >
                PieChart
              </Nav.Link>
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={6} lg={6} style={{ paddingRight: "0" }}>
              <Nav.Link
                as={NavLink}
                to="/bubble"
                style={{
                  color: "white",
                  paddingRight: "1%",
                  marginLeft: "0%",
                }}
              >
                <BubbleChartIcon style={{ fontSize: "24px" }} />
              </Nav.Link>
            </Col>
            <Col xs={6} sm={6} md={6} style={{ paddingLeft: "0" }}>
              <Nav.Link
                as={NavLink}
                to="/bubble"
                style={{
                  color: "white",
                  paddingLeft: "0",
                  marginLeft: "10%",
                }}
              >
                BubbleGraph
              </Nav.Link>
            </Col>
          </Row>
        </div>
      </Navbar>
    </div>
  );
};

export default Navbar2;
