import {
  GET_POKEMONS,
  CREATE_POKEMONS,
  FILTER_CREATED,
  ORDER_BY_NAME,
  ORDER_BY_ATTACK,
  FILTER_BY_TYPE,
  GET_NAME_POKEMONS,
  GET_TYPES,
  GET_DETAIL,
  CLEAR_DETAIL,
} from "./actions";

let initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
  detail: {},
  notFound: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
        notFound: false,
      };
    case GET_NAME_POKEMONS:
      if(action.payload.error) {
        return {
          ...state,
          pokemons: [],
          notFound: true
        }
      } else {
        return {
          ...state,
          pokemons: action.payload,
          notFound: false
        }
      }
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
      let sortedAttack=[...state.allPokemons]
      
      if(action.payload==='min') {
        sortedAttack.sort((a, b) => a.attack - b.attack);
      }
      if(action.payload==='max') {
        sortedAttack.sort((a, b) => b.attack - a.attack);
      }
      return {
        ...state,
        pokemons: sortedAttack,
      };

    case FILTER_BY_TYPE:
      let filterType;
      if (action.payload === "All") {
        filterType = state.allPokemons;
      } else {
        filterType = state.allPokemons.filter((e) =>
          e.types.includes(action.payload)
        );
      }
      return {
        ...state,
        pokemons: filterType,
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
