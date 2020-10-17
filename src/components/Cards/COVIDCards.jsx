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
                <div class="card-body"> <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-person-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10zm1.146-7.85a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                </svg>    Total Global COVID-19 Related Deaths
                </div>
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
                <div class="card-body"><svg width="1.5em" height="1.5em" viewBox="0 0 17 16" class="bi bi-exclamation-triangle-fill" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 5zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>   Total Global COVID-19 Positive Cases 
                </div>
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
                <div class="card-body"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-suit-heart-fill" fill="red" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                </svg> Total Global COVID-19 Recoveries Count   
                </div>
                </Card.Header>
                </div>
                <Card.Body>
         <Card.Title><CountUp start={0} end={recovered.value} duration={3.0} separator=","/> </Card.Title>
         <Card.Text>{new Date(lastUpdate).toDateString()}</Card.Text>
         <Card.Text>*Total current, active cases since date specified above*</Card.Text>
            </Card.Body>
            </Card>

        </div>
        </div>
            )
        }
        
        export default COVIDCards;




       
