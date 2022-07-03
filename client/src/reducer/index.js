const initialState = {
    allPok: [],
    searchPok:[]
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_POKEMONS':
            return {
                ...state,
                allPok: action.payload,
            }
        case 'SEARCH_POKEMONS':
            return{
                ...state,
                searchPok:action.payload
            }
        case 'POKEMON_DETAIL':
            return{
                ...state,
                searchPok:action.payload
            }
        default: 
            return {
                ...state,
            }
    }
}

export default rootReducer;