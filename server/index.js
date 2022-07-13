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

//Get all genres

app.get("/genres", async (req, res) => {
  try {
    const getAllGenres = await pool.query(
      'SELECT * from genres'
      );
    res.json(getAllGenres.rows);
  } catch (err) {
    console.error(err.message);
  }
})

//Delete a movie

app.delete("/delete/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    console.log("Deleted movie id:", id);
    const deleteStep = await pool.query(
      "DELETE FROM movies WHERE movie_id = $1 RETURNING *", [id]
    )
    res.json("The movie was deleted")
  } catch (err) {
    console.error(err.message)
  }
})

//Delete a genre

app.delete("/genres/delete/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    console.log("Deleted genre id:", id);
    const deleteStep = await pool.query(
      "DELETE FROM genres WHERE genre_id = $1 RETURNING *", [id]
    )
    res.json("The genre was deleted")
  } catch (err) {
    console.error(err.message)
  }
})