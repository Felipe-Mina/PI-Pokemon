const { Router } = require('express');
const { getAllInfo, createPokemon, getPokById, getPokByName, putImg } = require('../controllers/pokemon');
const { getCreated, getExistent } = require('../controllers/filters')
const { getTypes } = require('../controllers/type');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/pokemon/search/:name', getPokByName)

router.get('/pokemon', getAllInfo);

router.post('/pokemon', createPokemon);

router.get('/pokemon/:id', getPokById);

router.get('/types', getTypes);

router.put('/pokmodify', putImg)

router.get('/existent', getExistent)

router.get('/created', getCreated)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
