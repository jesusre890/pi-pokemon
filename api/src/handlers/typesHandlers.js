const getTypesHandler = (req, res) => {
  try {
    res.status(200).send("ok, estoy en types handlers");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTypesHandler,
};
