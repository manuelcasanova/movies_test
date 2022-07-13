import './App.css';

import NewMovie from './components/NewMovie';
import NewGenre from './components/NewGenre';
import MoviesList from './components/MoviesList';
import GenresList from './components/GenresList';


function App() {
  return (
    <div className="App">
      <NewMovie />
      <NewGenre />
      <MoviesList />
      <GenresList />
    </div>
  );
}

export default App;
