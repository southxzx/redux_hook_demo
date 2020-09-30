const initialState = {
    list: [],
    activeID: null
}

const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY':{
            return state;
        }
        case 'SET_ACTIVITY_HOBBY': {
            return state;
        }
        default:
            return state;
    }
}
export default hobbyReducer;