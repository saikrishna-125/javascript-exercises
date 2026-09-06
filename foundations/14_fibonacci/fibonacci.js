const fibonacci = function (num) {
  let prev = 1;
  let current = 1;
  let temp;

  num = +num;

  if (num < 0) {
    return "OOPS";
  } else if (num < 2) {
    return num;
  }

  for (let i = 2; i < num; i++) {
    temp = current;
    current = prev + current;
    prev = temp;
  }

  return current;
};

// Do not edit below this line
module.exports = fibonacci;
