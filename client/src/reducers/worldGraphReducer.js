let initialState = {
    data: [],
  };
  const worldGraphReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'WORLD_GRAPH':
        return {
          data: action.payload,
        };
      default:
        //returns
        return state;
    }
  };
  
  export default worldGraphReducer;
  