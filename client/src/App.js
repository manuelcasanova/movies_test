import './App.css';

import NewMovie from './components/NewMovie';
import NewGenre from './components/NewGenre';
import MoviesList from './components/MoviesList';
import GenresList from './components/GenresList';

import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8001/movies`)
      .then(function (res) {
        setMovies([...res.data])
        
      })
  }, [])

  return (
    <div className="App">
      <NewMovie />
      <NewGenre />
      <MoviesList movies={movies}/>
      <GenresList />
    </div>
  );
}

export default App;
