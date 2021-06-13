import axios from "axios";
import { useEffect, useState } from "react";
const useBook = (isEditing, history, validate, get) => {
  const [userData, setData] = useState({
    title: "",
    author: "",
    genre: "",
    release_date: "",
    description: "",
    image_url: "",
  });
  const [errors, setErrors] = useState({ init: "init" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    setData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(userData));
    setIsSubmitting(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      if (isEditing) {
        axios
          .put(
            `http://localhost:5000/api/book/${get.match.params.id}`,
            userData
          )
          .then(history.push("/"), (e) => {
            console.log(e);
          });
      } else {
        axios
          .post("http://localhost:5000/api/book", userData)
          .then(history.push("/"), (e) => {
            console.log(e);
          });
      }
    }
  }, [errors]);

  return {
    handleChange,
    userData,
    handleSubmit,
    errors,
    isSubmitting,
    setData,
  };
};
export default useBook;
