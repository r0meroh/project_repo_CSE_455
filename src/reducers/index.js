import piechartReducer from './pieReducers';
//import cardsReducer from './cardsReducers';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    piechartReduced: piechartReducer,
    //cards: cardsReducer,
});

export default allReducers;