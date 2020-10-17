import React from 'react';
import { Card, Spinner } from 'react-bootstrap';
import CountUp from 'react-countup';
import styles from './Cards.module.css';

const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate } }) => {
    if(!confirmed) {
       return <Spinner animation="border" variant="primary"/>
    }

    return (
       <div className={styles.container}>
           <div class="row">
           <Card style={{ width: '18rem'}}>
           <div class="card bg-danger text-white font-weight-bold">
                <Card.Header>
                <div class="card-body">Total COVID-19 Related Deaths</div>
                </Card.Header>
                </div>
            <Card.Body>
         <Card.Title><CountUp start={0} end={deaths.value} duration={3.0} separator=","/></Card.Title>
         <Card.Text>{new Date(lastUpdate).toDateString()}</Card.Text>
         <Card.Text>*Total death count since date specified above*</Card.Text>
            </Card.Body>
            </Card>
        
            
        
            <Card style={{ width: '18rem'}}>
            <div class="card bg-warning text-white font-weight-bold">
                <Card.Header>
                <div class="card-body">Total COVID-19 Positive Cases</div>
                </Card.Header>
                </div>
                <Card.Body>
         <Card.Title><CountUp start={0} end={confirmed.value} duration={3.0} separator=","/></Card.Title>
         <Card.Text>{new Date(lastUpdate).toDateString()}</Card.Text>
         <Card.Text>*Total current, active cases since date specified above*</Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem'}}>
            <div class="card bg-success text-white font-weight-bold">
                <Card.Header>
                <div class="card-body">Total COVID-19 Recoveries Count</div>
                </Card.Header>
                </div>
                <Card.Body>
         <Card.Title><CountUp start={0} end={recovered.value} duration={3.0} separator=","/></Card.Title>
         <Card.Text>{new Date(lastUpdate).toDateString()}</Card.Text>
         <Card.Text>*Total current, active cases since date specified above*</Card.Text>
            </Card.Body>
            </Card>

        </div>
        </div>
            )
        }
        
        export default Cards;




       