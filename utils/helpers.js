const Handlebars = require("handlebars");

// Given a number, append its leading zeroes
const appendLeadingZeroes = (num) => {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
};

// Format date to (DD, Month, YYYY)
const formatDate = (date) => {
  const newDate = new Date(date.setFullYear(date.getFullYear()));
  const formattedDate =
    appendLeadingZeroes(newDate.getDate()) +
    ` ` +
    newDate.toLocaleString("default", { month: "long" }) +
    `, ${newDate.getFullYear()}`;

  return formattedDate;
};

// Compare Two Values
const when = (a, operator, b) => {
  switch (operator) {
    case "notEq":
      return a !== b;
      break;
    case "grtThan":
      return a > b;
      break;
    case "eq":
      return a === b;
    default:
      throw "Operator invalid!";
  }
};

module.exports = {
  appendLeadingZeroes,
  formatDate,
  when,
};
