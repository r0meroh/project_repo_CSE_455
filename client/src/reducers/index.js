
import graphDataReducer from './heatMapReducer';
import worldGraphReducer from './worldGraphReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({

  graphData: graphDataReducer,
  worldGraph: worldGraphReducer,
});

export default allReducers;
