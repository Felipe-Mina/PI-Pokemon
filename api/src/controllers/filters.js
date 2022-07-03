const { Pokemon, Type } = require("../db");
const { default: axios } = require("axios");
const Sequelize = require("sequelize");


async function getExistent(req, res) {
    try {
      const poke = await axios(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=40`);
      const pokeData = poke.data.results;
      const pokemon = await Promise.all(
        pokeData.map(async (poke) => {
          let pDetail = await axios(poke.url);
          return {
            id: pDetail.data.id,
            name: pDetail.data.name,
            image: pDetail.data.sprites.other.dream_world.front_default,
            types: pDetail.data.types.map((t) => t.type.name),
            hp: pDetail.data.stats[0].base_stat,
            attack: pDetail.data.stats[1].base_stat,
            defense: pDetail.data.stats[2].base_stat,
            speed: pDetail.data.stats[5].base_stat,
            height: pDetail.data.height,
            weight: pDetail.data.weight,
          };
        })
      );
        res.status(200).send(pokemon);
    } catch (error) {
      throw new Error(error);
    }
  }

  const getCreated = async (req, res) => {
    const pokemonDb = await Pokemon.findAll({
      include: {
        model: Type,
        through: {
          attributes: [],
        },
      },
    });
     res.status(200).send(pokemonDb);
  };

  const filterStrong = async (req, res) => {
    const filtered = Pokemon.findAll({

    })
  }

  module.exports = {
    getExistent,
    getCreated
  }