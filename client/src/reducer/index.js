import { types_pokemons } from "../actions"

const initialState = {
    loading: true,
    allPok: [],
    searchPok: [],
    filter: [],
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_LOADING':
            return {
                allPok: [],
                loading: true,
            }
        case 'GET_POKEMONS':
            return {
                ...state,
                loading: false,
                allPok: action.payload,
                filter: action.payload,
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
        case 'EXISTENT_POKEMONS':
            return{
                ...state,
                loading: false,
                allPok:action.payload
            }
        case 'ALFB_POKEMONS':
            const allPokemons = state.allPok;
            const sortAlfbPokemons = action.payload 
            === 'asc' ? allPokemons.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                }
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1;
                }
                return 0
            })
            : allPokemons.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return -1
                }
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return 1
                }
                return 0
            })
            return {...state, allPok: [...sortAlfbPokemons]};
        
            case 'STRONG_POKEMONS':
            const allPoke = state.allPok;
            const sortStrPokemons = action.payload 
            === 'low' ? allPoke.sort((a, b) => {
                if (a.atck > b.atck) {
                    return 1;
                }
                if (a.atck < b.atck) {
                    return -1;
                }
                return 0
            })
            : allPoke.sort((a, b) => {
                if (a.atck > b.atck) {
                    return -1
                }
                if (a.atck < b.atck) {
                    return 1
                }
                return 0
            });
            return {...state, allPok: [...sortStrPokemons]}

            case 'TYPES_POKEMONS':
                const typePok = state.allPok;
                const pok = typePok.filter((e) => {
                    return e.types.includes(action.payload)
                })
                return {...state, filter: [...pok]};
        default: 
            return {
                ...state,
            }
    }
}

export default rootReducer;