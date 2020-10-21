let counterPhi = 0;




const counterReducer = ( state = counterPhi, action ) => {
    switch (action.type) {
        case 'IncrementPhi': 
            return state + 20
         case 'DecrementPhi':
             return state - 20
        default:
            return state;
    }
}

export default counterReducer;