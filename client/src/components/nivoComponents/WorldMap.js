import React, { useEffect } from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { useSelector, useDispatch } from "react-redux";
import { renderWorldGraph } from "../../actions/index";
import {
  incrementLambda,
  incrementPhi,
  decrementLambda,
  decrementPhi,
} from "../../actions/counterActions";
import countries from "./worldData.json";
import { Button, Row, Col } from "react-bootstrap";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { ListGroup } from "react-bootstrap";
const WorldMap = () => {
  const worldGraph = useSelector((state) => state.worldGraph);
  const counter = useSelector((state) => state.counter);
  const counterphi = useSelector((state) => state.phicounter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(renderWorldGraph());
  }, [dispatch]);
  // dispatch(renderWorldGraph())

  console.log(counter.counterLambda);
  const theme = {
    textColor: "#ffffff",
  };

  return (
    <>
      <Row>
        <Col md={2} className="AllButtons">
          <div>
            <Button
              onClick={() => dispatch(decrementPhi())}
              style={{ display: "block", marginLeft: "1.5rem" }}
              variant="dark"
            >
              <ArrowUpwardIcon />
            </Button>
            <Button onClick={() => dispatch(incrementLambda())} variant="dark">
              <ArrowBackIcon />
            </Button>
            <Button onClick={() => dispatch(decrementLambda())} variant="dark">
              <ArrowForwardIcon />
            </Button>
            <Button
              onClick={() => dispatch(incrementPhi())}
              variant="dark"
              style={{ display: "block", marginLeft: "1.5rem" }}
            >
              <ArrowDownwardIcon />
            </Button>
          </div>
        </Col>
        <Col md={8} className="Globe">
          <ResponsiveChoropleth
            data={worldGraph.data}
            features={countries.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="YlOrRd"
            domain={[0, 1000000]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionType="orthographic"
            projectionScale={240}
            projectionTranslation={[0.45, 0.5]}
            projectionRotation={[counter, counterphi, 0]}
            enableGraticule={true}
            graticuleLineColor="#dddddd"
            borderWidth={0.5}
            borderColor="#152538"
            theme={theme}
          />
        </Col>
        <Col md={2}>
          <div>
            <Row>
              <Col sm={12}>
                <ListGroup className="ListGroup" variant="flush">
                  <ListGroup.Item
                    className="List1 "
                    style={{
                      backgroundColor: "#800026",
                      textAlign: "text-center",
                    }}
                  >
                    890k-1M+
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="List2"
                    style={{ backgroundColor: "#8D0026" }}
                  >
                    780k-890k
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="List3"
                    style={{ backgroundColor: "#E31A1C" }}
                  >
                    670k-780k
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="List4"
                    style={{ backgroundColor: "#FC4E2A" }}
                  >
                    560k-670k
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="List5"
                    style={{ backgroundColor: "#DC7D38" }}
                  >
                    440k-560k
                  </ListGroup.Item>
                  <ListGroup.Item style={{ backgroundColor: "#FEB24C" }}>
                    330k-440k
                  </ListGroup.Item>
                  <ListGroup.Item style={{ backgroundColor: "#FED976" }}>
                    220k-330k
                  </ListGroup.Item>
                  <ListGroup.Item style={{ backgroundColor: "#FFEDA0" }}>
                    110k-220k
                  </ListGroup.Item>
                  <ListGroup.Item style={{ backgroundColor: "#FFFFCC" }}>
                    0-110k
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default WorldMap;
