import { useState } from "react";
import axios from 'axios';

export default function NewGenre({ genres, setGenres }) {

  const [genre_title, setGenreTitle] = useState("");


  function onSubmitForm(e) {
    e.preventDefault();
    const genre = {
      genre_title
    }
    addGenre(genre);
    resetForm();

  }

  function addGenre(genre) {
   
    console.log("Genre added:", genre)

    return axios.post(`http://localhost:8001/genres`,
      genre)
      .then((response) => {
        const newGenre = response.data;
        // const movieGenre = genres.find((genre) => {
        //   return genre.genre_id === newGenre.movie_genre_id
        // })
        // newGenre.genre_title = movieGenre.genre_title;
        setGenres([newGenre, ...genres])
      })
  }

  function resetForm() {
    setGenreTitle("");
  }

  return (
    <div>



      {/* <!-- Button trigger modal --> */}
      <button type="button"
        className="button_add" data-toggle="modal" data-target={`#newgenremodal${genres.genre_id}`}>Add genre
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id={`newgenremodal${genres.genre_id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add new genre</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">

              <label className="add_genre_title" htmlFor="title">Title</label>
              <input 
              className="form-control" 
              type="text" 
              name="title" 
              value={genre_title} 
              onChange={e => setGenreTitle(e.target.value)}/>
              <p></p>


            </div>

            <div className="modal-footer">
              <button type="button" className="button_close" data-dismiss="modal">Close</button>
              <button
                className="button_submit"
                type="Submit"
                onClick={onSubmitForm}
                data-dismiss="modal"
              >Add genre</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}