let initialState = {
    data: [],
};
const piechartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PIE_CHART':
            return {
                data: action.payload
            };
        default:
            return state;
    }
};

export default piechartReducer;