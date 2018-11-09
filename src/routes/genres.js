const express = require('express');
const router = express.Router();
const { genres, writeJSON } = require('../data-access');

router.get('/', (req, res) => {
    let genres = genres.filter(m => m.id == req.params.id)
    if(movieResults != null){
        res.render('movie-detail', { 
            movie: movieResults[0]
        });
    }
});

module.exports = router;