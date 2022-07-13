import './App.css';

import NewMovie from './components/NewMovie';
import NewGenre from './components/NewGenre';
import MoviesList from './components/MoviesList';
import GenresList from './components/GenresList';

import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8001/movies`)
      .then(function (res) {
        setMovies([...res.data])
        
      })
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:8001/genres`)
      .then(function (res) {
        setGenres([...res.data])
        
      })
  }, [])

  return (
    <div className="App">
      <NewMovie />
      <NewGenre />
      <MoviesList movies={movies} setMovies={setMovies}/>
      <GenresList genres={genres} setGenres={setGenres}/>
    </div>
  );
}

export default App;
