import { act } from 'react-dom/test-utils';
import { initialData } from './intitialData';
let DEATHS1 = 0;
let country1 = '';
const initialState = {
  //blank graph
  data: [],
  DEATHS1,
  country1,
  countryDeathData: [],
  countryCaseData: [],
  allCountryNames: [],
};

const graphDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GRAPH':
      return {
        data: action.payload,
        DEATHS1: action.DEATHS1,
        country1: action.country1,
        countryDeathData: action.deaths,
        countryCaseData: action.cases,
        allCountryNames: action.countries,
      };
    default:
      //returns
      return state;
  }
};

export default graphDataReducer;
