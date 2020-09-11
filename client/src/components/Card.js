import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

import { Card, Button, Container, CardColumns, CardImg } from 'react-bootstrap';
const dataa = [];
const CardTemplate = ({ data }) => {
  dataa.push(
    { ethinicity: 'Hispanic', area: 0.5 },
    {
      ethinicity: 'American Indian',
      area: 0.5,
    }
  );
  return (
    <Container>
      <div className='mt-5'>
        <div>
          <Card style={{ width: '23rem' }}>
            <Card.Body>
              <CardColumns>
                {
                  // <Paper>
                  //   <Chart data={dataa}>
                  //     <PieSeries valueField='area' argumentField='ethinicity' />
                  //     <Title text='Ethnicity' />
                  //     <Animation />
                  //   </Chart>
                  // </Paper>
                }
              </CardColumns>
              <Card.Title>{data.county_name}</Card.Title>
              <Card.Text>Indicator: {data.indicator}</Card.Text>
              <Button variant='primary'>View Graph</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};
export default CardTemplate;
