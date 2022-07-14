import axios from "axios"

export default function GenresList ({genres, setGenres, movies, setMovies}) {

  function deleteGenre(id) {
    return axios.delete(`http://localhost:8001/genres/delete/${id}`)
      .then(res => {
        setGenres(genres.filter(genre => genre.genre_id !== id))
        console.log("Genre deleted id:", id)
        // setMovies(...movies)
      })

  }

  return (
    <>

    <div className="tabletitle">
      List of genres
    </div>

    <table className="genrelist_table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
      {genres.map(genre =>
            <tr key={genre.genre_id}>
              <td>{genre.genre_title}</td>
              <td>Edit button</td>
              <td><button
                className="button_delete"
                onClick={() => deleteGenre(genre.genre_id)}
              >
                Delete</button></td>
            </tr>)}
      </tbody>

    </table>

  </>
  )
}