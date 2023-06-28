import { GET_ALL_POKEMONS } from "./actions";

let initialState = {
  allPokemons: [],
  //pokemonFiltered: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
      };
      default:
        return { ...state };
      }
    };
    
    export default rootReducer;
    
    //case FILTERS:
    //  if (action.payload === "asc") {
    //    return {
    //      ...state,
    //      pokemonFiltered: [...state.allPokemons].sort((prev, next) => {
    //        if (prev.name > next.name) return 1;
    //        if (prev.name < next.name) return -1;
    //        return 0;
    //      }),
    //    };
    //  } else if (action.payload === "des") {
    //    return {
    //      ...state,
    //      pokemonFiltered: [...state.allPokemons].sort((prev, next) => {
    //        if (prev.name > next.name) return -1;
    //        if (prev.name < next.name) return 1;
    //        return 0;
    //      }),
    //    };
    //  }