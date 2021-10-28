const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    rol: {
        type: String,
        default: 'Indefinido',
        required: true
    },
    estado:{
        type: String,
        default: 'Inactivo',
        required: true
    },
    password: {
        type: String,
        
    },
    idToken: {
        type: String
    }
}, );

module.exports = model('Usuario', UsuarioSchema);

// var schema = new Schema({ name: String }, { collection: 'actor' });