const initialState = {
    list: [],
    activeID: null
}

const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY':{
            const newList = [...state.list];
            newList.push(action.payload);
            return {
                ...state,
                list: newList
            }
        }
        case 'SET_ACTIVITY_HOBBY': {
            const newActiveID = action.payload.id;
            return {
                ...state,
                activeID: newActiveID
            }
        }
        default:
            return state;
    }
}
export default hobbyReducer;