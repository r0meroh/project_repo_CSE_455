import React, { useEffect } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import { useSelector, useDispatch } from "react-redux";
import { renderLineGraph } from "../../actions/lineActions";
import { Spinner } from "react-bootstrap";
import Search from "./Search";
import { Row, Col } from "react-bootstrap";
const NivoLine = () => {
  const lineGraph = useSelector((state) => state.lineGraph);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(renderLineGraph("United States"));
  }, [dispatch]);
  if (lineGraph.country === undefined) {
    return (
      <Spinner
        animation="border"
        role="status"
        className="text-center"
        variant="light"
        className="spinner"
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  const theme = {
    background: "#222222",
    textColor: "#ffffff",
  };

  return (
    <>
      <h1 className="text-center font" style={{ color: "white" }}>
        {lineGraph.data[0].id} Total Cases
      </h1>

      <ResponsiveLine
        data={lineGraph.data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: "middle",
        }}
        colors={{ scheme: "set1" }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        theme={theme}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
      <Search />
    </>
  );
};

export default NivoLine;
