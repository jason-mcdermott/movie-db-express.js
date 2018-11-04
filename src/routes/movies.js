const express = require('express');
const router = express.Router();
const { movies } = require('../data-access');

router.get('/movies', (req, res) => {
    res.render('movie-list', { movies: movies });
});

module.exports = router;