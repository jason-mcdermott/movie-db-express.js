const fs = require('fs');
const path = require('path');

const movieData = fs.readFileSync(
    path.join(__dirname, 'data', 'movies.json'), 'utf8'
);
const movies = JSON.parse(movieData);

const genreData = fs.readFileSync(
    path.join(__dirname, 'data', 'genres.json'), 'utf8'
);
const genres = JSON.parse(genreData);

const writeJSON = (data, type) => {
    const json = JSON.stringify(data, null, 4);
    fs.writeFileSync(path.join(__dirname, `data/${type}.json`), json, 'utf8');
};

module.exports = { movies, genres, writeJSON };