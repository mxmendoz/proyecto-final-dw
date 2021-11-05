require('dotenv').config();
const express = require('express');
const app = express();
const puerto = process.env.PORT;
const dbConnection = require('./database/config');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

const usuarios = require('./routes/usuarios');
const productos = require('./routes/productos');
const clientes = require('./routes/clientes');

app.use(usuarios);
app.use(productos);
app.use(clientes);
app.get('/', (req, res) => {
    res.send('Hola a todos!');
});

app.listen(puerto, () =>{
    console.log(`Servidor escuchando en el puerto: ${puerto}`);
});




