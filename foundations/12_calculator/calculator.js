const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (nums) {
  return nums.reduce((sum, num) => sum + num, 0);
};

const multiply = function (nums) {
  return nums.reduce((product, num) => product * num, 1);
};

const power = function (base, exponent) {
  result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};

const factorial = function (num) {
  result = 1;

  if (num === 0) {
    return 1;
  }

  while (num > 0) {
    result *= num;
    num -= 1;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
