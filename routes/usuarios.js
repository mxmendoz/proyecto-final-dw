const express = require('express');
const router = express.Router();

const usuario = require('../controllers/usuario');

//Mostrar Información (GET)
router.get('/usuario', usuario.mostrar);

//Crear Datos (POST)
router.post('/crear', usuario.crear);

//Actualizar Datos (PUT)
router.post('/editar', usuario.editar);

//Eliminar Datos (DELETE)
router.get('/borrar/:id', usuario.borrar); 

module.exports = router;
