import { colors } from "@material-ui/core";
import React, { useState, Fragment } from "react";
import LineChart from "./LineChart";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Lorem from "./Lorem";
import Lorem2 from "./Lorem2";
import Lorem3 from "./Lorem3";
import Footer from "./Footer";
import {
  Container,
  Jumbotron,
  Button,
  Row,
  Col,
  Modal,
  Form,
  Nav,
  Card,
  Tab,
  Tabs,
} from "react-bootstrap";

const Landing = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="Landing">
      <Row className="Jumbotron">
        <Col>
          <Jumbotron fluid className="TopOfLanding">
            <Col className="HeroText">
              <p style={{ textDecoration: "underline" }}>COVID-19</p>
              <p>THE SPREAD STOPS NOW</p>
              <p2>FILL OUT YOUR CPRA FORM TODAY</p2>
              <p>
                <Button
                  variant="outline-light"
                  style={{ width: "200px" }}
                  onClick={handleShow}
                >
                  Lets Get Started
                </Button>
              </p>
            </Col>
          </Jumbotron>
        </Col>
      </Row>
      <Row className="Jumbotron">
        <Col>
          <Jumbotron
            fluid
            className="Chart"
            style={{ backgroundColor: "white" }}
          >
            <Router>
              <LineChart />
            </Router>
          </Jumbotron>
        </Col>
      </Row>
      <Jumbotron fluid className="LandingCards">
        <Row className="Jumbotron">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://media.giphy.com/media/dyWxsX8ML1vScnFxEy/source.gif"
              />
              <Card.Body>
                <Card.Title>"X" Chart Guide</Card.Title>
                <Card.Text>This is how to do "X" thing on "X" Chart</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://media.giphy.com/media/dyWxsX8ML1vScnFxEy/source.gif"
              />
              <Card.Body>
                <Card.Title>"X" Chart Guide</Card.Title>
                <Card.Text>This is how to do "X" thing on "X" Chart</Card.Text>
              </Card.Body>
            </Card>{" "}
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://media.giphy.com/media/dyWxsX8ML1vScnFxEy/source.gif"
              />
              <Card.Body>
                <Card.Title>"X" Chart Guide</Card.Title>
                <Card.Text>This is how to do "X" thing on "X" Chart</Card.Text>
              </Card.Body>
            </Card>{" "}
          </Col>
        </Row>
      </Jumbotron>
      <Row className="Jumbotron">
        <Col>
          <Jumbotron
            fluid
            className="TextArea"
            style={{ backgroundColor: "white" }}
          >
            <Router>
              <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">
                  <Lorem />
                </Tab>
                <Tab eventKey="profile" title="News">
                  <Lorem2 />
                </Tab>
                <Tab eventKey="etc" title="etc">
                  <Lorem3 />
                </Tab>
              </Tabs>
              <Switch>
                <Route></Route>
              </Switch>
            </Router>
          </Jumbotron>
        </Col>
      </Row>

      <Row>
        <Col>
          <Jumbotron fluid className="Footer">
            <h1>Footer</h1>
          </Jumbotron>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>CPRA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="FormGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control type="range" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your information with anyone else.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Landing;