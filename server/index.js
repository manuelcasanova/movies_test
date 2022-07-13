const express = require('express');
const app = express();
const port = 8001;
const cors = require("cors");
const pool = require('./db')

app.use(cors());
app.use(express.json()); //req.body

app.listen(port, () => {
  console.log(`Movies app running on port ${port}.`);
});

//Routes and queries

//Get all movies

app.get("/movies", async (req, res) => {
  try {
    const getAllMovies = await pool.query(
      'SELECT movie_id, movie_title, movie_year, movie_genre_id, movie_imdb, genre_title FROM movies JOIN genres on genres.genre_id = movies.movie_genre_id ORDER BY movie_id DESC'
      );
    res.json(getAllMovies.rows);
  } catch (err) {
    console.error(err.message);
  }
})