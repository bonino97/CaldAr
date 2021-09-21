const mongoose = require('mongoose');

const boilerSchema = new mongoose.Schema({
    description: {
        type: String,
        required: 'La descripcion es un dato requerido.',
        trim: true,
    },
    type: {
        type: String,
        required: 'El tipo es un dato requerido.',
        trim: true,
    },
});

module.exports = mongoose.model('boiler', boilerSchema);