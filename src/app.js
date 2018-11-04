const fs = require('fs');
const path = require('path');
const express = require('express');
const { movies, categories, writeJSON } = require('./data-access');
const movieRoutes = require('./routes/movies');
const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => { 
    res.render('index', { title: 'Movie Db', movies });
});

app.get('/movie/:id', (req, res) => {
    let movieResults = movies.filter(m => m.id == req.params.id)
    if(movieResults != null){
        res.render('movie-detail', { 
            movie: movieResults[0]
        });
    }
});

//app.use('/movies', movieRoutes);

app.listen(port, () => { 
    console.log(`app running on port: ${port}`);
});

