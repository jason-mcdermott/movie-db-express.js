const fs = require('fs');
const path = require('path');

const movieData = fs.readFileSync(
    path.join(__dirname, 'json', 'movies.json'), 'utf8'
);
const movies = JSON.parse(movieData);
//console.log(movies);

const categoryData = fs.readFileSync(
    path.join(__dirname, 'json', 'categories.json'), 'utf8'
);
const categories = JSON.parse(categoryData);
//console.log(categories);

const writeJSON = () => {
    const moviesJSON = JSON.stringify(accounts, null, 4);
    //console.log(moviesJSON);
    fs.writeFileSync(path.join(__dirname, 'json/movies.json'), moviesJSON, 'utf8');
};

module.exports = { movies, categories, writeJSON };