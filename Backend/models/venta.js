const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    
    
    codigo_factura: {
        type: Schema.Types.ObjectId,
        ref: 'Factura',
        required: true
    },
    id_vendedor:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true  
    },
    cantidad_productos:{
        type: Schema.Types.ObjectId.cantidad,
        ref: 'Factura',
        required: true 
    },
    total:{
        type:Number,
        require:true
    }
},{timestamps: true});

module.exports = model('Producto', ProductoSchema);