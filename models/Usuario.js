const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio'],
        unique: true
    },
    rol: {
        type: String,
        required: true,
        enum: ['Admin', 'Usuario', 'Ventas', 'Compras', 'Bodega']
    }
}, {versionKey: false});

module.exports = mongoose.model('usuarios', usuarioSchema);