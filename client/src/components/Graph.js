import React from "react";
import { Paper } from "@material-ui/core";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from "@devexpress/dx-react-chart-material-ui";
const Graph = () => {
  const data = [
    { argument: 1, value: 100 },
    { argument: 2, value: 90 },
    { argument: 3, value: 30 },
  ];

  return (
    <Paper>
      <Chart data={data}>
        <ArgumentAxis />
        <ValueAxis />

        <LineSeries valueField="value" argumentField="argument" />
      </Chart>
    </Paper>
  );
};

export default Graph;
