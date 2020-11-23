const validateText = (input) => {
  const { value, minChar } = input;

  let valid = false;
  if (minChar && minChar !== 0 && value.trim().length >= minChar) {
    valid = true;
  }

  if (typeof minChar === "undefined" && value.trim().length !== 0) {
    valid = true;
  }

  return valid;
};

const validateEmail = (input) => {
  const regex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/, "i");

  return input.match(regex) !== null;
};

const validateCheckbox = (input) => {
  const { data, element } = input;

  if (element.checked) {
    return true;
  }

  let oneChecked = false;

  // Check if there's at least one selected
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].checked) {
      oneChecked = true;
      break;
    }
  }

  return oneChecked;
};

export const determineClass = (input) => {
  const { touched, dirty } = input;

  if (touched && dirty) {
    return "error";
  }

  if (touched && !dirty) {
    return "valid";
  }

  return "";
};

/**
 * Validate input data
 * @param {object} data
 * @return {boolean} True when valid, otherwise False
 */
const validator = (data) => {
  let valid = false;

  switch (data.type.toLowerCase()) {
    case "text":
      valid = validateText(data);
      break;
    case "email":
      valid = validateEmail(data.value);
      break;
    case "checkbox":
      valid = validateCheckbox(data);
      break;
    default:
      valid = false;
      break;
  }

  return valid;
};

export default validator;
