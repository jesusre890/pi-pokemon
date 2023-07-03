import {
  GET_POKEMONS,
  CREATE_POKEMONS,
  FILTER_CREATED,
  ORDER_BY_NAME,
  ORDER_BY_ATTACK,
  ORDER_BY_TYPE,
  GET_NAME_POKEMONS,
  GET_TYPES,
  GET_DETAIL,
  CLEAR_DETAIL
} from "./actions";

let initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
  detail: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };
    case GET_NAME_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case CREATE_POKEMONS:
      return {
        ...state,
        type: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case FILTER_CREATED:
      //const allPokemonsFiltered = state.allPokemons
      const createdFilter =
        action.payload === "created"
          ? state.allPokemons.filter((e) => e.createdInDb)
          : state.allPokemons.filter((e) => !e.createdInDb);
      return {
        ...state,
        pokemons: action.payload === "All" ? state.allPokemons : createdFilter,
      };
    case ORDER_BY_NAME:
      let sortedAll =
        action.payload === "asc"
          ? state.pokemons.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.pokemons.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        pokemons: sortedAll,
      };
    case ORDER_BY_ATTACK:
      let sortedAttack =
        action.payload === "max"
          ? state.pokemons.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.pokemons.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        pokemons: sortedAttack,
      };

    case ORDER_BY_TYPE:
      let orderType
      if (action.payload === "All") {
        orderType = state.allPokemons;
      } else {
        orderType = state.allPokemons.filter((e) =>
          e.types.includes(action.payload)
        );
      }
      //console.log(state.pokemons)
      return {
        ...state,
        pokemons: orderType,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload
      }
    case CLEAR_DETAIL:
      return {
        ...state,
        detail: {}
      }

    default:
      return { ...state };
  }
};

export default rootReducer;
