import React from "react";
import Card from "./Card";
import { Paper } from "@material-ui/core";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from "@devexpress/dx-react-chart-material-ui";
const Graph = ({ data }) => {
  console.log(data); // The very first

  return (
    // i is for every object in the data, so for us we have 3, one for each indicator
    // Each object needs a unique factor, hence why i.indicator
    <>
      {data.map((i) => (
        <Card key={i.indicator} data={i}>
          {" "}
        </Card>
      ))}
    </>

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
