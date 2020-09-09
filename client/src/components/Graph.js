import React from "react";
import { Paper } from "@material-ui/core";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from "@devexpress/dx-react-chart-material-ui";
const Graph = ({ data }) => {
  data.data.map((i) => {
    console.log(i);
  });
  return (
    <h1>hi</h1>
    // <Paper>
    //   <Chart >
    //     <ArgumentAxis />
    //     <ValueAxis />

    //     <LineSeries valueField='value' argumentField='argument' />
    //   </Chart>
    // </Paper>
  );
};

export default Graph;
