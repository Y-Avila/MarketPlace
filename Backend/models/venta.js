const { Schema, model } = require('mongoose');

const VentaSchema = Schema({
    
    id_vendedor:{
        type: String,
        required: true  
    },
    producto:{
        type: String,
        required: true  
    },
    cantidad:{
        type: Number,
        required: true 
    },
    precio:{
        type:Number,
        require:true
    },
    total:{
        type:Number,
        require:true
    }
    
},{timestamps: true});

module.exports = model('Venta', VentaSchema);