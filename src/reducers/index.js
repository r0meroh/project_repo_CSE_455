import piechartReducer from './pieReducers';
import cardsReducer from './cardsReducers';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    pieChartAlpha: piechartReducer,
    cardsAlpha: cardsReducer,
});

export default allReducers;