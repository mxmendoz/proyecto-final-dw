const express = require('express');
const router = express.Router();

const producto = require('../controllers/producto');

//Mostrar Información (GET)
router.get('/producto', producto.mostrar2);

//Crear Datos (POST)
router.post('/crear2', producto.crear2);

//Actualizar Datos (PUT)
router.post('/editar2', producto.editar2);

//Eliminar Datos (DELETE)
router.get('/borrar2/:id', producto.borrar2); 

module.exports = router;
