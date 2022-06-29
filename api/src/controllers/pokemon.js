const { Pokemon, Type } = require("../db");
const { v4: uuidv4 } = require("uuid");
const { default: axios } = require("axios");

const getPagination = (page, size) => {
  const limit = size ? size : 12;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};
/* const getPagingData = (data, page, limit,filtro,valor) => {
  const { count: totalItems, rows: Pokemon } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit); 
  page>totalPages?page=totalPages:totalPages   
  return { totalItems, Pokemon, totalPages, currentPage, filtro,valor };
} */

async function getApiInfo(page, size = 8) {
  const { limit, offset } = getPagination(page, size)
  try {
    const poke = await axios(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    const pokeData = poke.data.results;
    const pokemon = await Promise.all(pokeData.map(async poke => {
        let pDetail = await axios(poke.url)
          return {  
             id: pDetail.data.id,
              name: pDetail.data.name,
              image: pDetail.data.sprites.versions["generation-v"]["black-white"].animated.front_default,
              types: pDetail.data.types.map(t => t.type.name),
              hp: pDetail.data.stats[0].base_stat,
              attack: pDetail.data.stats[1].base_stat,
              defense: pDetail.data.stats[2].base_stat,
              speed: pDetail.data.stats[5].base_stat,
              height: pDetail.data.height, 
              weight: pDetail.data.weight
        }
    }))
    return pokemon
} catch (error) {
  console.log(error)
    throw new Error(error)
}
}

const getDbInfo = async (page, size = 4) => {
  const { limit, offset } = getPagination(page, size)
  const pokemonDb = await Pokemon.findAndCountAll({limit:limit,offset:offset,
  include: {
    model: Type,
    attributes: ["name"],
    through: {
      attributes: [],
    },
  },
  });
  return pokemonDb.rows
};

const getAllInfo = async (page) => {
  const apiPok = await getApiInfo(page);
  const dbPok = await getDbInfo(page);
  const allPok = apiPok.concat(dbPok);
  return allPok;
};


const getAllPok = async (req, res) => {
  let { page } = req.query;
  const allInfo = await getAllInfo(page)
  console.log(allInfo)
  res.status(200).send(allInfo)
};

const getPokById = async (req, res) => {
  let { id } = req.params;
  const pok = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const p = await pok.data;
  const pokemon = {
    id: p.id,
    name: p.name,
    hp: p.stats[0].base_stat,
    atck: p.stats[1].base_stat,
    def: p.stats[2].base_stat,
    speed: p.stats[5].base_stat,
    height: p.height,
    weight: p.weight,
  };
  console.log(pokemon);
  res.status(200).send(pokemon);
};

const createPokemon = async (req, res) => {
  let { name, hp, atck, def, speed, height, weight, types } = req.body;
  var idv4 = uuidv4();
  const dbid = idv4.slice(0, 4);
  const pokCreate = await Pokemon.create({
    id: dbid,
    name: name,
    hp: hp,
    atck: atck,
    def: def,
    speed: speed,
    height: height,
    weight: weight,
    types: types,
  });
  res.status(200).send(pokCreate);
};


module.exports = {
  getAllPok,
  createPokemon,
  getPokById,
};
