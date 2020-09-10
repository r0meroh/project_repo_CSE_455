import React from "react";
import { Card, Button, Container } from "react-bootstrap";
const CardTemplate = ({ data }) => {
  return (
    <Card
      style={{ width: "23rem", display: "inline-block" }}
      className="row mr-5"
    >
      <div className="col-lg-12 text-center ">
        <Card.Img variant="top" src="" />
        <Card.Body style={{ flex: 1 }}>
          <Card.Title>{data.county_name}</Card.Title>
          <Card.Text>Indicator: {data.indicator}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </div>
    </Card>
  );
};
export default CardTemplate;
