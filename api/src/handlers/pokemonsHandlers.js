const {
  createPokemon,
  getAllPokemons,
  getPokemonsById,
  deletePokemon,
} = require("../controllers/pokemonsController.js");

const getPokemonsHandler = async (req, res) => {
  let { name } = req.query;
  try {
    if (name) {
      const response = await getAllPokemons(name);
      return res.status(200).send(response);
    }
    const response = await getAllPokemons();
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getPokemonsIdHandler = async (req, res) => {
  const { idPokemon } = req.params;
  //console.log(idPokemon);
  try {
    const response = await getPokemonsById(idPokemon);
    //console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createPokemonsHandler = async (req, res) => {
  const {
    name,
    image,
    hp,
    attack,
    defense,
    speed = null,
    height = null,
    weight = null,
    createdInDb = true,
    types,
  } = req.body;
  //console.log('entre');
  try {
    const pokemon = await createPokemon(
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      createdInDb,
      types
    );
    //res.status(200).json({pokemon});
    res.status(200).json({ pokemon });
    //console.log(pokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPokemonsHandler,
  getPokemonsIdHandler,
  createPokemonsHandler,
};
