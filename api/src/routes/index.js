const { Router } = require('express');
const {getAllPok, createPokemon, getPokById } = require('../controllers/pokemon');
const { getTypes } = require('../controllers/type');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/pokemon', getAllPok);

router.post('/pokemon', createPokemon);

router.get('/pokemon/:id', getPokById);

router.get('/types', getTypes);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
