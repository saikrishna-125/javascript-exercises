const reverseString = function (string) {
  //   return string.split("").reverse().join("");
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string.at(i);
  }

  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
