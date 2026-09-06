const findTheOldest = function (people) {
  return people.reduce(
    (oldest, person) => {
      yearOfDeath = person.yearOfDeath || new Date().getFullYear();

      age = yearOfDeath - person.yearOfBirth;

      person.age = age;

      return age > oldest.age ? person : oldest;
    },
    { age: 0 },
  );
};

// Do not edit below this line
module.exports = findTheOldest;
