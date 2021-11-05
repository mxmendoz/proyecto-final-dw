const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    codigo: {
        type: String,
        required: [true, 'El código es obligatorio'],
        unique: true
    },
    producto: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    marca: {
        type: String,
        required: ['La marca del producto es obligatorio']
    },
    precio_compra: {
        type: Number,
        required: ['El precio de compras es necesario']
    },
    precio_venta: {
        type: Number,
        required: ['El precio de venta es necesario']
    },
    tamanio: {
        type: String,
        required: ['El tamaño del producto es necesario']
    },
    tipo_venta: {
        type: String,
        required: ['El tipo de venta es necesario']
    },
    existencia: {
        type: Number,
        required: ['La existencia del producto es necesario']
    }
}, {versionKey: false});

module.exports = mongoose.model('productos', productoSchema);