import graphReducer from './lineChartReducer';
import graphDataReducer from './heatMapReducer';
import worldGraphReducer from './worldGraphReducer';
import counterReducer from './counterReducer';
import { combineReducers } from 'redux';
import counterReducerPhi from './counterReducerPhi';
import calendarGraph from './calendarReducer'

const allReducers = combineReducers({
  graph: graphReducer,
  graphData: graphDataReducer,
  worldGraph: worldGraphReducer,
  counter: counterReducer,
  phicounter: counterReducerPhi,
  calendarGraph: calendarGraph,
});

export default allReducers;
