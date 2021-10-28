const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    
    name: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    grupo: {
        type: String,
        required: true
    },
    presentacion: {
        type: String,
        required: true
    },
   
    referencia: {
        type: String,
        required: true
    },
    bar_code: {
        type: String,
        required: true
    },
    
}, );

module.exports = model('Producto', ProductoSchema);