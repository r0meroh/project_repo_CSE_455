let initialState = {
  data: {},
};
const bubbleGraphReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUBBLE_GRAPH":
      return {
        data: action.payload,
      };
    default:
      //returns
      return state;
  }
};

export default bubbleGraphReducer;
