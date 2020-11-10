import React from "react";
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Carousel,
  Button,
  Accordion,
  Card,
} from "react-bootstrap";
const AboutUsFinal = () => {
  return (
    <Container className="AboutUsContainer">
      <Carousel className="AboutUsCarosel">
        <Carousel.Item>
          <h1 className="Carousel1">Meet The Team</h1>
          <p className="Carousel1">lorem ipusm</p>
        </Carousel.Item>
        <Carousel.Item className="AboutUsCarosel2">
          <Card bg="dark">
            <Row>
              <Col xs={6} sm={4}>
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/XD36tvQ/hector-Carbajal.jpg"
                />
                <Card.Title className="CarsoselText">Alfredo Mora</Card.Title>
                <Card.Subtitle className="mb-2 text-muted  ">
                  <span className="CarsoselText">
                    Role:{" Project Manager "}
                  </span>
                  <Card.Link
                    href="https://www.google.com/"
                    target="_blank"
                    class="fab fa-linkedin-in fa-2x social"
                  ></Card.Link>
                  <Card.Link
                    href="https://www.google.com/"
                    target="_blank"
                    class="fab fa-facebook-square fa-2x social"
                  ></Card.Link>
                  <Card.Link
                    href="https://www.google.com/"
                    target="_blank"
                    class="fa fa-instagram fa-2x social"
                  ></Card.Link>
                  <Card.Link
                    href="https://www.google.com/"
                    target="_blank"
                    class="fab fa-github fa-2x social"
                  ></Card.Link>
                </Card.Subtitle>
              </Col>
              <Col xs={12} md={8}>
                <Row>
                  <Card.Body className="CarsoselText">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.Some quick example text to
                    build on the card title and make up the bulk of the card's
                    contentSome quick example text to build on the card title
                    and make up the bulk of the card's contentSome quick example
                    text to build on the card title and make up the bulk of the
                    card's content.Some quick example text to build on the card
                    title and make up the bulk of the card's contentSome quick
                    example text to build on the card title and make up the bulk
                    of the card's content.
                  </Card.Body>
                </Row>
              </Col>
            </Row>
          </Card>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default AboutUsFinal;
