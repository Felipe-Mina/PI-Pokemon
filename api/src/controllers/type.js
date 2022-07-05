const { Pokemon, Type } = require("../db");
const { default: axios } = require("axios");

const getTypes = async(req, res) => {
    const info = await axios('https://pokeapi.co/api/v2/type');
    const infoTypes = await info.data.results.map(e => e.name)
    infoTypes.forEach(e => {
      Type.findOrCreate({
        where: {name: e}
      })
    })
    const allTypes = await Type.findAll();
    res.status(200).send(allTypes)
  }

  module.exports = {
    getTypes
  }