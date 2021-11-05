const express = require('express');
const router = express.Router();

const cliente = require('../controllers/cliente');

//Mostrar Información (GET)
router.get('/cliente', cliente.mostrar3);

//Crear Datos (POST)
router.post('/crear3', cliente.crear3);

//Actualizar Datos (PUT)
router.post('/editar3', cliente.editar3);

//Eliminar Datos (DELETE)
router.get('/borrar3/:id', cliente.borrar3); 

module.exports = router;
