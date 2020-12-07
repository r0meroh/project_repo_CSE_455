import React, { useEffect } from "react";
import { ResponsiveHeatMap } from "@nivo/heatmap";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { renderGraph } from "../../actions/index";
const HeatMap = () => {
  const graphData = useSelector((state) => state.graphData);
  const dispatch = useDispatch();
  console.log(graphData.data);

  useEffect(() => {
    dispatch(renderGraph());
  }, [dispatch]);
  const theme = {
    background: "#222222",
    textColor: "#ffffff",
    axis: {
      textColor: "#ffffff",
    },
  };

  return (
    <>
      <ResponsiveHeatMap
        data={graphData.data}
        keys={[
          "TotalDeaths",
          "TotalCases",
          "ActiveCases",
          "TodaysDeaths",
          "DeathsPerMil",
          "TodaysCases",
          "CasesPerMil",
          "Recovered",
        ]}
        // 'DEATHS', 'CASES',
        indexBy="country"
        margin={{ top: 100, right: 60, bottom: 60, left: 60 }}
        maxValue={100}
        forceSquare={true}
        colors="YlOrRd"
        theme={theme}
        axisTop={{
          orient: "top",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -90,
          legend: "",
          legendOffset: 36,
        }}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Countries",
          legendPosition: "middle",
          legendOffset: -90,
        }}
        cellOpacity={1}
        cellBorderWidth={2}
        cellBorderColor="black"
        labelTextColor={{ from: "color", modifiers: [["darker", 3.8]] }}
        defs={[
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(0, 0, 0, 0.1)",
            rotation: -45,
            lineWidth: 4,
            spacing: 7,
          },
        ]}
        fill={[{ id: "lines" }]}
        animate={false}
        motionStiffness={80}
        motionDamping={9}
        hoverTarget="cell"
        cellHoverOthersOpacity={0.25}
      />

      <Table striped bordered hove variant="dark">
        <thead>
          <tr>
            <th>Countries</th>
            <th>Cases</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{graphData.allCountryNames[0]}</td>

            <td>{graphData.countryCaseData[0]}</td>
            <td>{graphData.countryDeathData[0]}</td>
          </tr>
          <tr>
            <td>{graphData.allCountryNames[1]}</td>
            <td>{graphData.countryCaseData[1]}</td>
            <td>{graphData.countryDeathData[1]}</td>
          </tr>
          <tr>
            <td>{graphData.allCountryNames[2]}</td>
            <td>{graphData.countryCaseData[2]}</td>
            <td>{graphData.countryDeathData[2]}</td>
          </tr>
          <tr>
            <td>{graphData.allCountryNames[3]}</td>
            <td>{graphData.countryCaseData[3]}</td>
            <td>{graphData.countryDeathData[3]}</td>
          </tr>
          <tr>
            <td>{graphData.allCountryNames[4]}</td>
            <td>{graphData.countryCaseData[4]}</td>
            <td>{graphData.countryDeathData[4]}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default HeatMap;
