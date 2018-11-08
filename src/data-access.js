const fs = require('fs');
const path = require('path');

const movieData = fs.readFileSync(
    path.join(__dirname, 'data', 'movies.json'), 'utf8'
);
const movies = JSON.parse(movieData);

const categoryData = fs.readFileSync(
    path.join(__dirname, 'data', 'categories.json'), 'utf8'
);
const categories = JSON.parse(categoryData);

const writeJSON = (data) => {
    const moviesJSON = JSON.stringify(data, null, 4);
    fs.writeFileSync(path.join(__dirname, 'data/movies.json'), moviesJSON, 'utf8');
};

module.exports = { movies, categories, writeJSON };