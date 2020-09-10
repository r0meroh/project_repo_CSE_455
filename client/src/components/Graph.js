import React from "react";
import Card from "./Card";
import { Paper } from "@material-ui/core";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  PieSeries,
} from "@devexpress/dx-react-chart-material-ui";

const Graph = ({ data }) => {
  console.log(data); // The very first
  return (
    // i is for every object in the data, so for us we have 3, one for each indicator
    // Each object needs a unique factor, hence why i.indicator
    <>
      {data.map((i) => (
        <div className="column">
          <div className="container">
            <Card key={i.indicator} data={i}>
              {" "}
            </Card>
          </div>
        </div>
      ))}
    </>
  );
};

export default Graph;
