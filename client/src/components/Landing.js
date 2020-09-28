import React, { useState, Fragment } from "react";
import {
  Carousel,
  Container,
  Jumbotron,
  Button,
  Row,
  Col,
} from "react-bootstrap";
const Landing = () => {
  return (
    <Container fluid>
      <Row className="Jumbotron">
        <Col>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
        </Col>
      </Row>
      <Row className="BoxText">
        <Col>
          <h1>TEXT CONTENT</h1>
        </Col>
      </Row>
      <Row className="Footer">
        <Col>
          <h1>Footer</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
