const fs = require('fs');
const path = require('path');
const express = require('express');
const { movies, categories, writeJSON } = require('./data');
const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => { 
    res.render('index', { title: 'Movie Db', movies });
    console.log(movies);
});

app.listen(port, () => { 
    console.log(`app running on port: ${port}`);
});