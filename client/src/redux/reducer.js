import { GET_ALL_POKEMONS, FILTER_BY_ORIGIN, CREATE_POKEMONS } from "./actions";

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
    
    case CREATE_POKEMONS:
      return {
        ...state,
        type:action.payload
      }
    
    case FILTER_BY_ORIGIN:
      const regexUUID =
        /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
      if (action.payload === "All") {
        return {
          ...state,
          pokemonsFilter: state.allPokemons,
        };
      }
      if (action.payload === "db") {
        let pokemonsFilterDb = state.allPokemons.filter((pokemon) =>
          regexUUID.test(pokemon.id)
        );
        return {
          ...state,
          pokemonsFilter: pokemonsFilterDb,
        };
      }
      if (action.payload === "api") {
        let pokemonsFilterApi = state.allPokemons.filter(
          (pokemon) => !regexUUID.test(pokemon.id)
        );
        return {
          ...state,
          pokemonsFilter: pokemonsFilterApi,
        };
      }
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