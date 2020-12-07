import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Row, Col, ListGroup } from 'react-bootstrap';
import WorldMap from './nivoComponents/WorldMap';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import AnimationCount from 'react-count-animation';

const LandingFinal = () => {
  const [count, setCount] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://disease.sh/v3/covid-19/all?yesterday=true&twoDaysAgo=false&allowNull=false'
      );
      setCount(result.data.cases);

      console.log(result);
    };

    fetchData();
  }, []);
  //Lines 25-31 we learned the idea from hdtuto:https://hdtuto.com/article/react-js-get-current-date-and-time-example
  var date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let today = date.getDate();
  const settings = {
    start: 50000000,
    count: count,
    duration: 1555,
    decimals: 0,
    useGroup: true,
    animation: 'up',
  };

  return (
    <Jumbotron fluid className='LandingPageContainer'>
      <Container>
        <Row>
          <Col sm={12} className='LandingCases'>
            <h1 className='font' style={{ color: 'white', marginTop: '-2rem' }}>
              Global Cases: {'  '}
              <span style={{ display: 'inline-block' }}>
                <AnimationCount {...settings} />
              </span>
            </h1>
            <h5 className='font2' style={{ color: 'white' }}>
              Last Updated: {month + '/' + today + '/' + year}
            </h5>
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
