let initialState = {
    data: [],
  };
  const calendarGraphReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CALENDAR_GRAPH':
        return {
          data: action.payload,
        };
      default:
        //returns
        return state;
    }
  };
  
  export default calendarGraphReducer;