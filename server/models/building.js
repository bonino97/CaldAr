const mongoose = require('mongoose');

const buildingSchema = new mongoose.Schema({
  address: {
    type: String,
    required: 'La direccion es requerida.',
    trim: true,
  },
  category: {
    type: String,
    required: 'La categoria es requerida.',
    trim: true,
  },
  description: String,
});

module.exports = mongoose.model('building', buildingSchema);
