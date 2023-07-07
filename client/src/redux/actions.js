import axios from "axios";

//ACTIONS-TYPES
export const GET_POKEMONS = "GET_POKEMONS";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const GET_NAME_POKEMONS = "GET_NAME_POKEMONS";
export const GET_TYPES = "GET_TYPES";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const ORDER_BY_HP = "ORDER_BY_HP";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAR_DETAIL = "CLEAR_DETAIL";

//ACTIONS
export const getPokemons = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/pokemons/");
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
      //console.log(response);
      alert("Pokemon creado, Gran trabajo!");
      return response;
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };
};

export const getNamePokemons = (name) => {
  return async (dispatch) => {
    try {
      let response = await axios.get(
        "http://localhost:3001/pokemons?name=" + name
      );
      return dispatch({
        type: GET_NAME_POKEMONS,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: GET_NAME_POKEMONS,
        payload: { error: error },
      });
    }
  };
};

export const getTypes = () => {
  return async (dispatch) => {
    let info = await axios.get("http://localhost:3001/types", {});
    return dispatch({ type: GET_TYPES, payload: info.data });
  };
};

export const filterCreated = (payload) => {
  return {
    type: FILTER_CREATED,
    payload,
  };
};

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
};

export const orderByAttack = (payload) => {
  return {
    type: ORDER_BY_ATTACK,
    payload,
  };
};

export const filterByType = (payload) => {
  return {
    type: FILTER_BY_TYPE,
    payload,
  };
};

export const getDetail = (id) => {
  return async (dispatch) => {
    try {
      let response = await axios.get("http://localhost:3001/pokemons/" + id);
      return dispatch({
        type: GET_DETAIL,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearDetail = () => {
  return {
    type: CLEAR_DETAIL,
  };
};

export const orderByHp = (payload) => {
  return {
    type: ORDER_BY_HP,
    payload,
  };
};
