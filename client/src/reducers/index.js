import graphReducer from "./lineChartReducer";
import graphDataReducer from "./heatMapReducer";
import worldGraphReducer from "./worldGraphReducer";
import counterReducer from "./counterReducer";
import { combineReducers } from "redux";
import counterReducerPhi from "./counterReducerPhi";
import calendarGraph from "./calendarReducer";
import lineGraphReducer from "./nivoLineReducer";
import piechartReducer from "./pieChartReducer";
import bubbleGraph from "./bubbleReducer";
const allReducers = combineReducers({
  graph: graphReducer,
  graphData: graphDataReducer,
  worldGraph: worldGraphReducer,
  counter: counterReducer,
  phicounter: counterReducerPhi,
  calendarGraph: calendarGraph,
  lineGraph: lineGraphReducer,
  piechartReduced: piechartReducer,
  bubbleGraph: bubbleGraph,
});

export default allReducers;
