import React, { useEffect, useState } from "react";
import "./Pagination.scss";
const Pagination = ({
  currLenght,
  setCurrPage,
  isDeleting,
  burgerState,
  genresFilter,
}) => {
  var pageLinks = [];
  const [shownLinks, setShownLinks] = useState([]);
  const [thisPage, setThisPage] = useState(0);
  const handlePage = (e) => {
    setCurrPage(e.target.id);
    setThisPage(e.target.id);
  };
  useEffect(() => {
    const pages = Math.ceil(currLenght / 27);
    for (let i = 0; i < pages; i++) {
      let active = thisPage == i ? "active" : "";
      pageLinks.push(
        <li className={`page-${active}`} id={i} key={i} onClick={handlePage}>
          {i + 1}
        </li>
      );
    }
    setShownLinks(pageLinks);
  }, [setThisPage, currLenght, thisPage, isDeleting]);

  useEffect(() => {
    setCurrPage(0);
    setThisPage(0);
  }, [genresFilter]);

  return <div className={`page-list-${burgerState}`}>{shownLinks}</div>;
};
export default Pagination;
