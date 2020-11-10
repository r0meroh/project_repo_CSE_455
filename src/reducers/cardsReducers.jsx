let initialState = {
    data: [],
};
const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COVID_CARDS':
            return {
                data: action.payload,
            };
        default:
            return state;
    }
};

export default cardsReducer;