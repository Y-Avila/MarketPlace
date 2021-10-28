const { Schema, model } = require('mongoose');

const FacturaSchema = Schema({
    producto: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    vendedor: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    sub_total: {
        type: Number,
        required: true
    },
    
},{timestamps: true} );

module.exports = model('Factura', FacturaSchema);