const palindromes = function (string) {
  alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";

  let filtered = string
    .toLowerCase()
    .split("")
    .filter((char) => alphanumeric.includes(char));

  let actual = filtered.join("");
  let reverse = filtered.reverse().join("");
  return actual === reverse;
};

// Do not edit below this line
module.exports = palindromes;
