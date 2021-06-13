import { useEffect, useState } from "react";
import axios from "axios";
import "./BookDetail.scss";
import { Link } from "react-router-dom";
import StarsComponent from "./StarsComponent";
const BookDetail = (get) => {
  const [post, setPost] = useState(null);
  useEffect(async () => {
    const fetched = await axios
      .get(`http://localhost:5000/api/book/${get.match.params.id}`)
      .then((e) => {
        return e.data;
      });
    const deleteBook = () => {
      axios.delete(`http://localhost:5000/api/book/${fetched.id}`).then(
        () => {
          get.history.push("/");
        },
        (e) => {
          console.log(e);
        }
      );
    };

    const toShow = (
      <div>
        <div className="detail">
          <div className="detail-frame">
            <img className="detail-image" src={fetched.image_url} />
            <div className="editOrDeleteField">
              <Link
                to={`/edit/${fetched.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="edit">EDIT</div>
              </Link>
              <div className="delete" onClick={deleteBook}>
                DELETE
              </div>
            </div>
          </div>
          <div className="detail-data">
            <div className="detail-stars">
              <StarsComponent id={fetched.id} />
            </div>
            <div className="detail-title">{fetched.title}</div>
            <div className="detail-author">{fetched.author}</div>
            <div className="detail-genre">{fetched.genre}</div>
            <div className="detail-date">
              {fetched.release_date.slice(0, 10)}
            </div>
            <div className="detail-description">{fetched.description}</div>
          </div>
        </div>
      </div>
    );
    setPost(toShow);
  }, []);

  return <div className="details">{post}</div>;
};
export default BookDetail;
