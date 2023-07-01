import axios from "axios";

//ACTIONS-TYPES
export const GET_POKEMONS = "GET_POKEMONS";
export const CREATE_POKEMONS = "CREATE_POKEMONS";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const GET_NAME_POKEMONS="GET_NAME_POKEMONS";
export const GET_TYPES = "GET_TYPES";

//ACTIONS
export const getPokemons = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/pokemons");
      //console.log(response.data);
      return dispatch({ type: GET_POKEMONS, payload: response.data });
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

export const getNamePokemons = (name) => {
  //console.log('despacho desde actions');
  return async (dispatch) => {
    try {
      let response = await axios.get(
        "http://localhost:3001/pokemons?name=" + name
      );
      return dispatch({
        type: "GET_NAME_POKEMONS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTypes = () => {
  return async (dispatch) => {
    let info = await axios.get("http://localhost:3001/types", {});
    return dispatch({ type: "GET_TYPES", payload: info.data });
  };
};

export const filterCreated = (payload) => {
  return {
    type: "FILTER_CREATED",
    payload,
  };
};

export const orderByName = (payload) => {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
};
