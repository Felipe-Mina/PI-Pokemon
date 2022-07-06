import axios from "axios";

//      Me traigo todos los pokemons del back utilizando la ruta que defini con express...
export const get_pokemons = () => {
  return async function (dispatch) {
    return axios.get("http://localhost:3001/pokemon").then((data) => {
      dispatch({ type: "GET_POKEMONS", payload: data.data });
    });
  };
};
//      Action de filtrado por nombre para la pantalla de busqueda...
export const search_pokemons = (name) => {
  return async function (dispatch) {
    return axios
      .get(`http://localhost:3001/pokemon/search/${name}`)
      .then((data) => {
        dispatch({ type: "SEARCH_POKEMONS", payload: data.data });
      });
  };
};
//      Filtrado de pokemon por ID para la pantalla de detalles...
export const pokemon_detail = (id) => {
  return async function (dispatch) {
    return axios.get(`http://localhost:3001/pokemon/${id}`).then((data) => {
      dispatch({ type: "POKEMON_DETAIL", payload: data.data });
    });
  };
};
//      Filtrado por pokemons de la API y los de la base de datos...
export const existent_pokemons = (value) => {
  return async function (dispatch) {
    return axios
    .get(`http://localhost:3001/${value.toLowerCase()}`)
    .then((data) => {
        dispatch({ type: "EXISTENT_POKEMONS", payload: data.data });
      });
  };
};
//      Ordenamiento alfabetico...
export const alfb_pokemons = (value) => {
  return {
    type: "ALFB_POKEMONS",
    payload: value,
  };
};
//      Ordenamiento por fuerza...
export const strong_pokemons = (value) => {
  return {
    type: "STRONG_POKEMONS",
    payload: value,
  };
};
//      Control de la pantalla de carga...
export const change_loading = () => {
  return {
    type: "CHANGE_LOADING",
    payload: true,
  };
};
//      Filtrado por tipo de pokemon.
export const types_pokemons = (value) => {
  return {
    type: "TYPES_POKEMONS",
    payload: value,
  };
};

export const clean = (value => {
  return {
    type: "CLEAN",
    payload: [],
  };
});