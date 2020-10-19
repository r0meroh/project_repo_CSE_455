import graphReducer from './lineChartReducer';
import graphDataReducer from './heatMapReducer';
import worldGraphReducer from './worldGraphReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  graph: graphReducer,
  graphData: graphDataReducer,
  worldGraph: worldGraphReducer,
});

export default allReducers;
