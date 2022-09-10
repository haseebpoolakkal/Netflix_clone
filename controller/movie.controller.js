const movieSchema = require('../models/movie.schema');

function createMovie(req, res) {
    const movie = req.body;

    if(movie != null || movie != undefined) {
        const movieObject = {
            name: movie.name,
            directorName: movie.directorName,
            yearOfRelease: movie.yearOfRelease,
            poster: movie.poster
        };
        movieSchema.create(movieObject, (error, response) => {
            if(error) {
                console.log(error)
                res.status(500).send('Error in creating movie');
            }
            else {
                console.log(response)
                res.status(201).send('Movie is created');
            }
        })
    }
    else {
        console.log('Data is missing')
        res.status(404).send('Movie data is missing');
    }
}


function getAllMovies(req, res) {
    movieSchema.find({}).exec((error, response) => {
        if(error) {
            console.log(error)
            res.status(500).send('Something went wrong..')
        }
        else {
            console.log(response)
            res.status(200).send(response);
        }
    })
}

function searchMovie(req, res) {
    const movieName = req.params.name;
    console.log(movieName)
    if(movieName != null || movieName != undefined) {
        movieSchema.findOne({name: movieName}).exec((error, response) => {
            if(error) {
                console.log(error)
                res.status(500).send('Something went wrong')
            }
            else {
                console.log(response)
                if(response == null || response == undefined) {
                    res.status(404).send("Movie not found")
                }
                else {
                    res.status(200).send(response);
                }
            }
        })
    }
}

module.exports = {
    createMovie,
    getAllMovies,
    searchMovie
}