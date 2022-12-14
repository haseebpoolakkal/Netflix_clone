const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    directorName: {
        type: String,
        default: 'Unknown Director'
    },
    yearOfRelease: {
        type: Number
    },
    poster: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Movie', movieSchema);