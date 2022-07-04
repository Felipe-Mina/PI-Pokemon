import axios from 'axios'

/* export function get_pokemons() {
    return async function(dispatch) {
        const json = await axios.get('http://localhost:3001/pokemon')
        return dispatch({
            type: 'GET_POKEMONS',
            payload: json.data
        })
    }
} */

export const get_pokemons=  () => {
    return async function (dispatch){
        return axios.get('http://localhost:3001/pokemon')
        .then(data=>{
            dispatch({type: "GET_POKEMONS",
            payload:data.data})
        })
    }
}

export const search_pokemons = (name) => {
    return async function (dispatch){
        return axios.get(`http://localhost:3001/pokemon/search/${name}`)
        .then(data=>{
            dispatch({type: "SEARCH_POKEMONS",
            payload:data.data})
        })
    }
}

export const pokemon_detail = (id) => {
    return async function (dispatch){
        return axios.get(`http://localhost:3001/pokemon/${id}`)
        .then(data=>{
            dispatch({type: "POKEMON_DETAIL",
            payload:data.data})
        })
    }
}

export const existent_pokemons = (value) => {
    return async function (dispatch) {
        return axios.get(`http://localhost:3001/${value.toLowerCase()}`)
        .then(data=>{
            dispatch({type: "EXISTENT_POKEMONS",
            payload:data.data})
        })
    }
}

export const alfb_pokemons = (value) => {
        return { 
            type: "ALFB_POKEMONS",
            payload: value,
        }
}

export const strong_pokemons = (value) => {
    return { 
        type: "STRONG_POKEMONS",
        payload: value,
    }
}

export const change_loading = () => {
    return {
        type: "CHANGE_LOADING",
        payload: true,
    }
}

export const types_pokemons = (value) => {
    console.log(value);
    return {
        type: "TYPES_POKEMONS",
        payload: value,
    }
}