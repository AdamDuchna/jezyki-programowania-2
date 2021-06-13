import { useEffect, useState } from "react";
import "./BookList.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import StarsComponent from "../FormAndDetail/DetailedView/StarsComponent";

const BooksList = ({
  searchFilter,
  genresFilter,
  setCurrLenght,
  currPage,
  currRating,
  isDeleting,
  burgerState,
}) => {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [booksList, setBookList] = useState([]);
  const [results, setResults] = useState(0);
  const [sortingParam, setSortingParam] = useState(null);
  const [arrayOfDeletionIds, setArrayDeletionIds] = useState([]);

  const mapContent = (content) => {
    return content.map((el) => (
      <li key={el.id}>
        <Link to={`/details/${el.id}`} style={{ textDecoration: "none" }}>
          <div className="book" key={el.id}>
            <img className="book-image" src={el.image_url} />
            <StarsComponent ratingSent={el.rating} fromList={true} />
            <div className="book-name">{el.title}</div>
            <div className="book-author">{el.author}</div>
          </div>
        </Link>
      </li>
    ));
  };

  const mapToDeletion = (content) => {
    return content.map((el) => (
      <li key={el.id}>
        <div className="book" key={el.id}>
          <input type="checkbox" onClick={appendDeletion} value={el.id}></input>
          <img className="book-image" src={el.image_url} />
          <StarsComponent ratingSent={el.rating} fromList={true} />
          <div className="book-name">{el.title}</div>
          <div className="book-author">{el.author}</div>
        </div>
      </li>
    ));
  };
  const appendDeletion = (e) => {
    console.log(arrayOfDeletionIds);
    if (arrayOfDeletionIds.includes(e.target.value)) {
      setArrayDeletionIds(
        arrayOfDeletionIds.filter((x) => x != e.target.value)
      );
    } else {
      setArrayDeletionIds([...arrayOfDeletionIds, e.target.value]);
    }
  };
  const deleteFromArray = () => {
    arrayOfDeletionIds.forEach((e) => {
      axios.delete(`http://localhost:5000/api/book/${e}`).then(
        function () {
          setArrayDeletionIds(arrayOfDeletionIds.filter((x) => x != e));
          setBookList(
            booksList.filter((el) => {
              return el.id != e;
            })
          );
        },
        () => {
          console.log("error");
        }
      );
    });
  };

  const paginateContent = (content) => {
    const booksPerPage = 27;
    const booksVisited = currPage * booksPerPage;
    const displayBooks = content.slice(
      booksVisited,
      booksVisited + booksPerPage
    );
    return isDeleting ? mapToDeletion(displayBooks) : mapContent(displayBooks);
  };

  const goSort = (books) => {
    if (!isDeleting && arrayOfDeletionIds.length != 0) {
      deleteFromArray();
    }
    if (sortingParam == "rating") {
      const sorted = books.sort((a, b) => {
        return b[sortingParam] - a[sortingParam];
      });
      return sorted;
    }
    if (sortingParam == "release_date") {
      const sorted = books.sort((a, b) => {
        return new Date(b.release_date) - new Date(a.release_date);
      });
      return sorted;
    }
    if (sortingParam == "title") {
      const sorted = books.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      return sorted;
    } else return books;
  };

  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/api/book").then(
      (e) => {
        return e.data;
      },
      (e) => {
        console.log(e);
      }
    );
    setFilteredBooks(paginateContent(res));
    setBookList(res);
    setCurrLenght(res.length);
    setResults(res.length);
  }, []);

  useEffect(() => {
    const filtered = booksList.filter((val) => {
      if (searchFilter === "") return val;
      else if (
        val.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
        val.author.toLowerCase().includes(searchFilter.toLowerCase())
      ) {
        return val;
      }
    });

    if (genresFilter.length != 0) {
      const genreFiltered = filtered.filter((el) => {
        if (genresFilter.includes(el.genre)) return el;
      });
      if (currRating != null) {
        const genreFilteredByRating = genreFiltered.filter(
          (el) => el.rating == currRating
        );
        setFilteredBooks(paginateContent(goSort(genreFilteredByRating)));
        setCurrLenght(genreFilteredByRating.length);
        setResults(genreFilteredByRating.length);
      } else {
        setFilteredBooks(paginateContent(goSort(genreFiltered)));
        setCurrLenght(genreFiltered.length);
        setResults(genreFiltered.length);
      }
    } else {
      if (currRating != null) {
        const genreFilteredByRating = filtered.filter(
          (el) => el.rating == currRating
        );
        setFilteredBooks(paginateContent(goSort(genreFilteredByRating)));
        setCurrLenght(genreFilteredByRating.length);
        setResults(genreFilteredByRating.length);
      } else {
        setFilteredBooks(paginateContent(goSort(filtered)));
        setCurrLenght(filtered.length);
        setResults(filtered.length);
      }
    }
  }, [
    searchFilter,
    genresFilter,
    currPage,
    currRating,
    setSortingParam,
    sortingParam,
    isDeleting,
    booksList,
  ]);

  const sortBy = (e) => {
    setSortingParam(e.target.value);
  };

  return (
    <div className={`booklist-${burgerState}`}>
      <div className="list-sort">
        <div className="list-sort-res">There are {results} results</div>
        <div className="list-sort-buttons">
          <p>Sort by</p>
          <select onChange={sortBy}>
            <option value="title">Title</option>
            <option value="release_date">Date</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
      <div className="list-books">{filteredBooks}</div>
    </div>
  );
};
export default BooksList;
