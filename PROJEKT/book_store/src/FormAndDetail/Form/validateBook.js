function validateInfo(values) {
  let errors = {};
  if (!values.title) {
    errors.title = "Title required";
  } else if (!/[A-Z]$/.test(values.title.charAt(0))) {
    errors.title = "Title needs to be uppercase";
  }
  if (!values.author) {
    errors.author = "Author required";
  } else if (!/[A-Z]$/.test(values.title.charAt(0))) {
    errors.author = "Author needs to be uppercase";
  }
  if (!values.genre) {
    errors.genre = "Genre is required";
  } else if (values.genre.length > 50) {
    errors.genre = "Genre is too long";
  }
  if (!values.release_date) {
    errors.release_date = "Date is required";
  } else if (
    !/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/.test(
      values.release_date
    )
  ) {
    errors.release_date = "Wrong data";
  }
  if (!values.description) {
    errors.description = "Description is required";
  }
  return errors;
}
export default validateInfo;
