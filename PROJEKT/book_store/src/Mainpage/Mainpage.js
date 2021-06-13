import "./Mainpage.scss";
import BooksList from "./BookList";
import FilterField from "./FilterField";
import { useState } from "react";
import Pagination from "./Pagination";

const Mainpage = ({ burgerState }) => {
  const [searchFilter, setSearchFilter] = useState("");
  const [genresFilter, setGenresFilter] = useState([]);
  const [currLenght, setCurrLength] = useState(0);
  const [currPage, setCurrPage] = useState(0);
  const [currRating, setCurrRating] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  return (
    <div className="mainpage">
      <div>
        <BooksList
          searchFilter={searchFilter}
          genresFilter={genresFilter}
          setCurrLenght={setCurrLength}
          currPage={currPage}
          currRating={currRating}
          isDeleting={isDeleting}
          burgerState={burgerState}
        />
        <Pagination
          currLenght={currLenght}
          setCurrPage={setCurrPage}
          isDeleting={isDeleting}
          burgerState={burgerState}
          genresFilter={genresFilter}
        />
      </div>
      <FilterField
        setSearchFilter={setSearchFilter}
        setGenresFilter={setGenresFilter}
        setCurrPage={setCurrPage}
        setCurrRating={setCurrRating}
        setIsDeleting={setIsDeleting}
        burgerState={burgerState}
      />
    </div>
  );
};
export default Mainpage;
