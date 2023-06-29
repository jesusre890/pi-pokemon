import axios from "axios";

//ACTIONS-TYPES
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const CREATE_POKEMONS="CREATE_POKEMONS";
//export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
//export const GET_POKEMONS_BY_ID = "GET_POKEMONS_BY_ID";
//export const GET_TYPES_API = "GET_TYPES_API";

//ACTIONS
export const getAllPokemon = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/pokemons");
      //console.log(response.data);
      return dispatch({ type: GET_ALL_POKEMONS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createPokemons = (info) => {
  return async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/pokemons/create",
        info
      );
      console.log(response);
      alert("Pokemon creado");
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };
};

export function filterCreated(payload) {
  return {
    type: 'FILTER_CREATED',
    payload
  }
}

//export const filterByOrigin=(payload) => {
//  console.log(payload);
//  return {
//    type: FILTER_BY_ORIGIN,
//    payload
//  };
//};
//export const filter = (orden) => {
//  return function (dispatch) {
//    return dispatch({
//      type: FILTERS,
//      payload: orden,
//    });
//  };
//};


