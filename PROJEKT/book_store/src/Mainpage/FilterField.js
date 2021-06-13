import { useState, useEffect } from "react";
import "./FilterField.scss";
import axios from "axios";
import StarsComponent from "../FormAndDetail/DetailedView/StarsComponent";
const FilterField = ({
  setSearchFilter,
  setGenresFilter,
  setCurrPage,
  setCurrRating,
  setIsDeleting,
  burgerState,
}) => {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [filterStars, setFilterStars] = useState(null);
  const [deletionCheckmark, setDeletionCheckmark] = useState(false);

  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/api/book").then(
      (e) => {
        return e.data;
      },
      () => {}
    );
    setBooks(res);
    const toSet = [
      ...new Set(
        res.reduce((acc, el) => {
          return [...acc, el.genre];
        }, [])
      ),
    ];
    const mappedSet = toSet.slice(0, 20).map((el) => (
      <div className="genre" key={el}>
        <input type="checkbox" name={el} />
        <p className="genre-name">{el}</p>
      </div>
    ));
    setGenres(mappedSet);
  }, []);

  const handleChange = (e) => {
    setSearchFilter(e.target.value);
    setCurrPage(0);
  };
  const handleSetRating = (e) => {
    setFilterStars(e);
    setCurrRating(e);
  };
  const handleCheck = (e) => {
    setCurrPage(0);
    if (e.target.checked) {
      setGenresFilter([...selectedGenres, e.target.name]);
      setSelectedGenres([...selectedGenres, e.target.name]);
    } else {
      const newSelection = selectedGenres.filter((x) => x != e.target.name);
      setSelectedGenres(newSelection);
      setGenresFilter(newSelection);
    }
  };
  const handleDeletion = () => {
    setDeletionCheckmark(!deletionCheckmark);
    if (!deletionCheckmark) {
      setIsDeleting(true);
    } else {
      setIsDeleting(false);
    }
  };

  return (
    <div className={`filter-field-${burgerState}`}>
      <div className="filter-field-box">
        <input type="text" placeholder="Search..." onChange={handleChange} />
        <div className="trashcan" onClick={handleDeletion}>
          <img src="trash.png" width="32px"></img>
        </div>
      </div>
      <p className="select-filters ">Select Rating</p>
      <div className="starfilter">
        <StarsComponent filtering={true} setFilterStars={handleSetRating} />
      </div>
      <p className="select-filters">Select Genres</p>
      <div className="checkbox" onClick={handleCheck}>
        {genres}
      </div>
    </div>
  );
};
export default FilterField;
