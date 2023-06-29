import { GET_ALL_POKEMONS, CREATE_POKEMONS } from "./actions";

let initialState = {
  allPokemons: [],
  pokemonFiltered: [],
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
        type: action.payload,
      };
    //case 'FILTER_CREATED':
    //  const allPokemons = state.allPokemons
    //  const createdFilter = action.payload === 'created' ? allPokemons.filter
    
    
    
    
    
    //case FILTER_BY_ORIGIN:
    //  const allPokemons = state.allPokemons;
    //  const byOrigin =
    //    action.payload === "attack"
    //      ? allPokemons
    //      : allPokemons.filter((e) => e.hp === action.payload);
    //  return {
    //    ...state,
    //    pokemonFiltered: byOrigin
    //  };
    //case FILTER_BY_ORIGIN:
    //  const regexUUID =
    //    /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
    //  if (action.payload === "All") {
    //    return {
    //      ...state,
    //      pokemonsFilter: state.allPokemons,
    //    };
    //  }
    //  if (action.payload === "db") {
    //    let pokemonsFilterDb = state.allPokemons.filter((pokemon) =>
    //      regexUUID.test(pokemon.id)
    //    );
    //    return {
    //      ...state,
    //      pokemonsFilter: pokemonsFilterDb,
    //    };
    //  }
    //  if (action.payload === "api") {
    //    let pokemonsFilterApi = state.allPokemons.filter(
    //      (pokemon) => !regexUUID.test(pokemon.id)
    //    );
    //    return {
    //      ...state,
    //      pokemonsFilter: pokemonsFilterApi,
    //    };
    //  }
    default:
      return { ...state };
  }
};

export default rootReducer;
