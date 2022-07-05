const { Pokemon, Type } = require("../db");
const { v4: uuidv4 } = require("uuid");
const { default: axios } = require("axios");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

async function getApiInfo() {
  try {
    const poke = await axios(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=40`);
    const pokeData = poke.data.results;
    const pokemon = await Promise.all(
      pokeData.map(async (poke) => {
        let pDetail = await axios(poke.url);
        return {
          id: pDetail.data.id,
          name: pDetail.data.name,
          img: pDetail.data.sprites.other.dream_world.front_default,
          types: pDetail.data.types.map((t) => t.type.name),
          hp: pDetail.data.stats[0].base_stat,
          atck: pDetail.data.stats[1].base_stat,
          defense: pDetail.data.stats[2].base_stat,
          speed: pDetail.data.stats[5].base_stat,
          height: pDetail.data.height,
          weight: pDetail.data.weight,
        };
      })
    );
    return pokemon;
  } catch (error) {
    throw new Error(error);
  }
}

const getDbInfo = async () => {
  const pokemonDb = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ['name'],
      through: {
        attributes: [],
      },
    },
  });
  const pokemon = pokemonDb.map(e => {
    return {
      name: e.name,
      img: e.img,
      hp: e.hp,
      atck: e.atck,
      def: e.def,
      speed: e.speed,
      height: e.height,
      weight: e.weight,
      types: e.types.map(e => e.name)
    }
  })
  console.log(pokemon)
   return pokemon;
};

const getAllInfo = async (req, res) => {
  const apiPok = await getApiInfo();
  const dbPok = await getDbInfo();
  const allPok = apiPok.concat(dbPok);
  res.status(200).send(allPok);
};

const getPokByName = async (req, res) => {
  const { name } = req.params;
  try {
    const dbPok = await Pokemon.findOne({
      where: {
        name: { [Op.iLike]: `%${name}%` },
      },
      include: [{ model: Type }],
    });
    if (dbPok === null) {
      const pokeInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const e = await pokeInfo.data;
      const pokemon = {
        id: e.id,
        name: e.name,
        img: e.sprites.other.dream_world.front_default,
        types: e.types.map((t) => t.type.name),
        hp: e.stats[0].base_stat,
        attack: e.stats[1].base_stat,
        defense: e.stats[2].base_stat,
        speed: e.stats[5].base_stat,
        height: e.height,
        weight: e.weight,
      };
      return res.status(202).send(pokemon);
    }
    res.status(202).send(dbPok);
  } catch (error) {
    res.status(400).send("pokemon not found");
  }
};

const getPokById = async (req, res) => {
  let { id } = req.params;
  try {
    const dbPokId = await Pokemon.findOne({
      where: { id: `${id}` },
      include: [{ model: Type }],
    });
    if (dbPokId === null) {
      const pok = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const p = await pok.data;
      const pokemon = {
        id: p.id,
        name: p.name,
        img: p.sprites.other.dream_world.front_default,
        hp: p.stats[0].base_stat,
        atck: p.stats[1].base_stat,
        def: p.stats[2].base_stat,
        speed: p.stats[5].base_stat,
        height: p.height,
        weight: p.weight,
      };
      return res.status(200).send(pokemon);
    }
    res.status(200).send(dbPokId);
  } catch (error) {
    res.status(400).send("pokemon no encontrado");
  }
};

const createPokemon = async (req, res) => {
  let { name, hp, atck, def, speed, height, weight, types, img } = req.body;
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
    img: img,
  });
  types.map(async (t) => {
    const [postTypes, succes] = await Type.findOrCreate({
      where: {
        name: t,
      },
      defaults: { name: t },
    });
    await pokCreate.addType(postTypes);
  })
  res.status(200).send(pokCreate);
};

const putImg = async (req, res) => {
  const { img } = req.params;
  await Pokemon.update(
    {
      img: img,
    }
    /* {where: {}} */
  );
};

module.exports = {
  getAllInfo,
  createPokemon,
  getPokById,
  getPokByName,
  getApiInfo,
  putImg,
};
