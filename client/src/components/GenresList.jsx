export default function GenresList ({genres}) {
  return (
    <>

    <div className="tabletitle">
      List of movies
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
              <td>Delete button</td>
            </tr>)}
      </tbody>

    </table>

  </>
  )
}