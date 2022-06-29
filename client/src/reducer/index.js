const initialState = {
    allPok: [],
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_POKEMONS':
            return {
                ...state,
                allPok: action.payload,
            }
        default: 
            return {
                ...state,
            }
    }
}

export default rootReducer;