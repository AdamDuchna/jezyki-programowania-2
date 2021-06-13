import useBook from "./useBook";
import validateBook from "./validateBook";
import axios from "axios";
import "./AddBook.scss";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
const AddEditBook = (get) => {
  const [isEditing, setIsEditing] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if ("match" in get) {
      axios.get(`http://localhost:5000/api/book/${get.match.params.id}`).then(
        (e) => {
          e.data.release_date = e.data.release_date.substring(0, 10);
          setIsEditing(true);
          setData(e.data);
        },
        (e) => {
          console.log(e);
        }
      );
    }
  }, []);

  const { handleChange, userData, handleSubmit, errors, setData } = useBook(
    isEditing,
    history,
    validateBook,
    get
  );

  return (
    <div className="add-book">
      {isEditing ? <h1>Edit this book!</h1> : <h1>Add your favourite book!</h1>}
      <div className="form">
        <form onSubmit={handleSubmit}>
          {errors.title && <p>{errors.title}</p>}
          <div>
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              className="form-input"
              placeholder="Enter title"
              value={userData.title}
              onChange={handleChange}
            ></input>
          </div>

          {errors.author && <p>{errors.author}</p>}
          <div>
            <label htmlFor="author" className="form-label">
              Author
            </label>
            <input
              id="author"
              name="author"
              type="text"
              className="form-input"
              placeholder="Enter author"
              value={userData.author}
              onChange={handleChange}
            ></input>
          </div>

          {errors.genre && <p>{errors.genre}</p>}
          <div>
            <label htmlFor="genre" className="form-label">
              Genre
            </label>
            <input
              id="genre"
              name="genre"
              type="text"
              className="form-input"
              placeholder="Enter genre"
              value={userData.genre}
              onChange={handleChange}
            ></input>
          </div>

          {errors.release_date && <p>{errors.release_date}</p>}
          <div>
            <label htmlFor="release_date" className="form-label">
              Date
            </label>
            <input
              id="release_date"
              name="release_date"
              type="text"
              className="form-input"
              placeholder="Enter release date YYYY-MM-DD"
              value={userData.release_date}
              onChange={handleChange}
            ></input>
          </div>

          <div className="book-description">
            <div className="book-description-text">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              {errors.description && <p>{errors.description}</p>}
            </div>

            <textarea
              id="description"
              name="description"
              type="text"
              className="form-input"
              placeholder="Enter book description"
              value={userData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <label htmlFor="image_url" className="form-label">
              Image
            </label>
            <input
              id="image_url"
              name="image_url"
              type="text"
              className="form-input"
              placeholder="Link an image(optional)"
              value={userData.image_url}
              onChange={handleChange}
            ></input>
          </div>

          <button type="submit" className="form-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddEditBook;
