import axios from "axios"

export default function MoviesList ({movies, setMovies}) {

  function deleteMovie(id) {
    return axios.delete(`http://localhost:8001/delete/${id}`)
      .then(res => {
        setMovies(movies.filter(movie => movie.movie_id !== id))
        console.log("Movie deleted id:", id)
      })

  }

  return (
    <>

    <div className="tabletitle">
      List of movies
    </div>

    <table className="movielist_table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Genre</th>
          <th>Imdb</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
      {movies.map(movie =>
            <tr key={movie.movie_id}>
              <td>{movie.movie_title}</td>
              <td>{movie.movie_year}</td>
              <td>{movie.genre_title}</td>
              <td>{movie.movie_imdb}</td>
              <td>Edit button</td>
              <td><button
                className="button_delete"
                onClick={() => deleteMovie(movie.movie_id)}
              >
                Delete</button></td>
            </tr>)}
      </tbody>

    </table>

  </>
  )
}

