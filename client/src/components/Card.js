import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  LineSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { Card, Button, Container, CardColumns, CardImg } from "react-bootstrap";
const CardTemplate = ({ data }) => {
  return (
    <Container>
      <div className="mt-5">
        <div>
          <Card style={{ width: "23rem" }}>
            <CardImg
              variant="top"
              src="https://cdn.pixabay.com/photo/2020/03/16/16/29/virus-4937553_960_720.jpg"
            ></CardImg>
            <Card.Body>
              <CardColumns>{}</CardColumns>
              <Card.Title>{data.county_name}</Card.Title>
              <Card.Text>Indicator: {data.indicator}</Card.Text>
              <Button variant="primary">View Graph</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};
export default CardTemplate;
