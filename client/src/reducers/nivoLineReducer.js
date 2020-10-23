let initialState = {
  data: [],
};
const lineGraphReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LINE_GRAPH':
      return {
        data: action.payload,
        date: action.date,
        country: action.country,
      };
    case 'DEATH_GRAPH':
      return {
        data: action.payload,
      };
    default:
      //returns
      return state;
  }
};

export default lineGraphReducer;
