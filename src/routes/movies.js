const express = require('express');
const router = express.Router();
const { movies, writeJSON } = require('../data-access');

router.get('/:id', (req, res) => {
    let movieResults = movies.filter(m => m.id == req.params.id)
    if(movieResults != null){
        res.render('movie-detail', { 
            movie: movieResults[0]
        });
    }
});

router.post('/:id', (req, res) => {
    let index = movies.findIndex(m => m.id == req.body.id);
    if(index > -1) {
        movies[index] = { 
            id: parseInt(req.body.id),
            title: req.body.title,
            director: req.body.director,
            categories: [req.body.category],
            releaseYear: req.body.year
        };
        
        writeJSON(movies);

        res.render('movie-detail', { 
            movie: movies[index]
        });
    }
});

module.exports = router;