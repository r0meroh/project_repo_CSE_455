import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Row, Col, ListGroup } from 'react-bootstrap';
import WorldMap from './nivoComponents/WorldMap';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import CountUp from 'react-countup';
import axios from 'axios';

const LandingFinal = () => {
  const [count, setCount] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://disease.sh/v3/covid-19/all?yesterday=true&twoDaysAgo=false&allowNull=false'
      );
      setCount(result.data.cases);
    };
    fetchData();
  }, []);

  return (
    <Jumbotron fluid className='LandingPageContainer'>
      <Container>
        <Row>
          <Col sm={12} className='LandingCases'>
            <h1 className='font' style={{ color: 'white' }}>
              Global Cases: {count}
            </h1>
          </Col>

          <div style={{ height: 200, width: 1000, marginLeft: '10%' }}>
            <WorldMap />
          </div>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default LandingFinal;
