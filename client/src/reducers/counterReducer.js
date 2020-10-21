let counterLambda = 0;
let counterPhi = 0;
let initialState = {
    counterLambda,
    counterPhi
}



const counterReducer = ( state = counterLambda, action ) => {
    switch (action.type) {
        case 'IncrementLambda': 
            return state + 20
         case 'DecrementLambda':
             return state - 20
        default:
            return state;
    }
}

export default counterReducer;