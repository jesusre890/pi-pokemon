const { Pokemon, Type } = require("../db");
const axios = require("axios");

//Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.

//const getPokemons = async (name) => {
//  try {
//    if (name) {
//      //trae el primero que encuentre en la base de datos
//      const pokemonByName = await Pokemon.findOne({ where: { name } });
//      return pokemonByName;
//    }
//    const allPokemon = await Pokemon.findAll();
//    return allPokemon;
//  } catch (error) {
//    throw new Error(error.message);
//  }
//};

const getPokemonsApi = async () => {
  try {
    const api = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=5");

    const pokeApi = await api.data.results; //guardo la info en una constante para luego mapear y modificar segun la info de la url

    const dataPokemon = pokeApi.map(async (pokemon) => {
      const info = await axios.get(pokemon.url);
      const i = info.data;
      return {
        id: i.id,
        name: i.name,
        types: i.types.map((e) => e.type.name),
        image: i.sprites.other.home.front_default,
        hp: i.stats[0].base_stat,
        attack: i.stats[1].base_stat,
        defense: i.stats[2].base_stat,
        speed: i.stats[5].base_stat,
        height: i.height,
        weight: i.weight,
      };
    });

    const getAllPokemon = await Promise.all(dataPokemon);
    return getAllPokemon;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getPokemonsDb = async () => {
  const allPokemonsDb=await Pokemon.findAll({
    raw:true,
    include: {
      model: Type,
      atributes: ["name"],
    },
  });
  console.log('all pokemon',allPokemonsDb);
  const mapPokeInfo = allPokemonsDb.map((e) => {
    return {
      id: e.id,
      name: e.name,
      image: e.image,
      hp: e.hp,
      attack: e.attack,
      defense: e.defense,
      speed:e.speed,
      height: e.height,
      weight: e.weight,
    };
  });
  return mapPokeInfo;
};

const getAllPokemons = async (name) => {
  const pokemonsDb=await getPokemonsDb();
  console.log(getPokemonsDb);
  const pokemonsApi = await getPokemonsApi();
  const allPokemon=pokemonsDb.concat(pokemonsApi);
  //console.log(allPokemon);

  let pokemonName;
  if (name) {
    pokemonName = allPokemon.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(name.toLowerCase())
    );
    if (pokemonName.length) return pokemonName;
    throw new Error("No se encontro ningun pokemon con ese nombre");
  }
  return allPokemon;
};

const getPokemonsById=async (idPokemon) => {
  const all=await getAllPokemons();
  //console.log('allggggg',all);
  const byId=await all.filter((e) => String(e.id)===idPokemon);
  //console.log('byId',byId);
  //console.log(typeof idPokemon);
  if (byId.length) {
    return byId
  } else {
    throw new Error(`Pokemon no encontrado, id: ${idPokemon} incorrecto`);
  }
};

const createPokemon = async (
  name,
  image,
  hp,
  attack,
  defense,
  speed = null,
  height = null,
  weight = null,
  types
) => {
  //console.log("estoy por crear ");
  const [pokemon, created] = await Pokemon.findOrCreate({
    where: { name }, //especifica el campo y valor para la busqueda
    defaults: {
      name: name,
      image: image,
      hp: hp,
      attack: attack,
      defense: defense,
      speed: speed,
      height: height,
      weight: weight,
    },
  });
  if (!created) throw new Error("Este pokemon ya existe");

  const typesPokemon = await Type.findAll({ where: { name: types } });
  pokemon.setTypes(typesPokemon);
  //console.log(typesPokemon);
  //console.log(pokemon);
  return pokemon;
};

module.exports = {
  getPokemonsApi,
  getPokemonsDb,
  getAllPokemons,
  getPokemonsById,
  createPokemon,
};

//const getPokemonsById = async (idPokemon) => {
//  const source = isNaN(idPokemon) ? "bd" : "api";
//  if (source === "api") {
//    const pokemon = await axios.get(
//      `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
//    );
//    return pokemon.data;
//  }
//  const pokemon = await Pokemon.findByPk(idPokemon);
//  return pokemon;
//};
