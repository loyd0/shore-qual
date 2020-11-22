export const convertArrayToObject = (array, key) => {
  const initialValue = {}
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: {
        value: "",
        ...item,
      },
    }
  }, initialValue)
}

// Encode the form data for URL submission
export const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

// Custom validation of email function
export const ValidateEmail = (input) => {
  // Retrieve the email from previously submitted forms
  const item = getLocalStorage("email")
  if (item === input) {
    // return error message if it exists
    return "This email address has already been used."
  } else {
    return (
      input &&
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        input
      )
    )
  }
}
