const { createPokemon } = require("../controllers/pokemonsController.js");

const getPokemonsHandler = (req, res) => {
  try {
    let { name } = req.query;
    res.status(200).send(`ok, estamos en getPokemon: ${name}`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPokemonsIdHandler = (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Pokemon con id: ${id}`);
};

const createPokemonsHandler = async (req, res) => {
  const { name, image, hp, attack, defense, speed, height, weight, types } =
    req.body;
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
      types
    );
    //console.log('esto es lo que estoy creando ',pokemon);
      res.status(200).send({pokemon});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPokemonsHandler,
  getPokemonsIdHandler,
  createPokemonsHandler,
};
