const mogoose = require('mongoose');

const boilerSchema = new mongoose.Schema({
    description: {
        type: String,
        required: '',
        trim: true,
    },
    type: {
        type: String,
        required: '',
        trim: true,'
    },
});

module.exports = mongoose.model('boiler', )