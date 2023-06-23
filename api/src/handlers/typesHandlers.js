const {getTypesApi} = require('../controllers/typesController')

const getTypesHandler= async (req,res) => {
  try {
    const typesPokemon = await getTypesApi()
    res.status(200).json(typesPokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTypesHandler,
};
