import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const dataa = [];

const PieChart = ({ data }) => {
  data.map((i) => {
    dataa.push({
      ethinicity: 'Hispanic',
      area: i.hispanic,

      ethinicity: 'American Indian',
      area: i.non_hispanic_american_indian,

      ethinicity: 'Asian',
      area: i.non_hispanic_asian,
      ethinicity: 'Black',
      area: i.non_hispanic_black,
      ethinicity: 'White',
      area: i.non_hispanic_white,
      ethinicity: 'Other',
      area: i.other,
    });
  });
  dataa.map((i) => {
    console.log(i);
  });
  return (
    <h1>hello</h1>
    // <Paper>
    //   <Chart data={dataa}>
    //     <PieSeries valueField='area' argumentField='ethinicity' />
    //     <Title text='Ethnicity' />
    //     <Animation />
    //   </Chart>
    // </Paper>
  );
};

export default PieChart;
