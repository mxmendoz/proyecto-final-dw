const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
    nit: {
        type: String,
        required: [true, 'El nit es obligatorio'],
        unique: true
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    apellido: {
        type: String,
        required: ['El apellido es obligatorio']
    },
    telefono: {
        type: Number,
        unique: true
    },
    correo: {
        type: String,
        unique: true
    },
    direccion: {
        type: String
    }
}, {versionKey: false});

module.exports = mongoose.model('clientes', clienteSchema);