let counterLambda = -257;

const counterReducer = (state = counterLambda, action) => {
  switch (action.type) {
    case "IncrementLambda":
      return state + 20;
    case "DecrementLambda":
      return state - 20;
    default:
      return state;
  }
};

export default counterReducer;
