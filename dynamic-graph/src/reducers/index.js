
import graphReducer from './graph';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    graph: graphReducer,


});
export default allReducers;