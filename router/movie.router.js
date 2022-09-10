const express = require('express');
const route = express.Router()
const movieController = require('../controller/movie.controller')

route.post('/create', movieController.createMovie);

route.get('/movies', movieController.getAllMovies)

route.get('/movie/:name', movieController.searchMovie)

module.exports = route;