import axios from "axios";
import { useState, useEffect } from "react";
import "./StarsComponent.scss";
function Star(props) {
  const { fill = "none" } = props;
  return (
    <svg
      className="star"
      fill={fill}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeWidth="1"
        d="M11.049 2.927c.3-.921 1.603-.921 
            1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 
            4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1
             1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      ></path>
    </svg>
  );
}

function RatingStar(props) {
  const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
  } = props;
  const [fill, setFill] = useState("none");
  useEffect(() => {
    if (hoverRating >= index) {
      setFill("#00887a");
    } else if (!hoverRating && rating >= index) {
      setFill("#00887a");
    } else {
      setFill("none");
    }
  }, [rating, hoverRating, index]);
  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
      onClick={() => {
        onSaveRating(index);
      }}
    >
      <Star fill={fill} />
    </div>
  );
}
const StarsComponent = ({
  id,
  ratingSent,
  fromList,
  filtering,
  setFilterStars,
}) => {
  const [rating, setRating] = useState(ratingSent);
  const [hoverRating, setHoverRating] = useState(0);
  const [rated, setRated] = useState(false);
  const fetchRating = (index) => {
    axios
      .post(`http://localhost:5000/api/book/${id}/rate`, { score: index })
      .then(
        (e) => console.log(e.data.rating),
        (e) => {
          console.log(e);
        }
      );
  };
  useEffect(() => {
    if (fromList) {
      setRated(true);
    }
  });

  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRated(true);
    setRating(index);
    fetchRating(index);
    if (typeof setFilterStars === "function") setFilterStars(index);
  };
  const stars = [1, 2, 3, 4, 5].map((index) => {
    return (
      <div key={index}>
        {!rated || filtering ? (
          <RatingStar
            index={index}
            rating={rating}
            hoverRating={hoverRating}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onSaveRating={onSaveRating}
          />
        ) : (
          <RatingStar
            index={index}
            rating={rating}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
            onSaveRating={() => {}}
          />
        )}
      </div>
    );
  });
  return (
    <div>
      <div>
        {ratingSent === undefined && rated && !filtering
          ? "Thank you for rating!"
          : ""}
      </div>
      <div className="stars">{stars}</div>
    </div>
  );
};

export default StarsComponent;
