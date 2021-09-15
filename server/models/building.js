const mongoose = require('mongoose');

const buildingSchema = new mongoose.Schema({
  address: {
    type: String,
    required: 'La direccion es requerida.',
  },
  category: {
    type: String,
    required: 'La categoria es requerida.',
  },
});

module.exports = mongoose.model('building', buildingSchema);
