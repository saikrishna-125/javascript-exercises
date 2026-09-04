const removeFromArray = function (array, ...args) {
  //   args.forEach((item) => {
  //     while (array.includes(item)) {
  //       index = array.indexOf(item);
  //       index === -1 || array.splice(index, 1);
  //     }
  //   });

  return array.filter((item) => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
