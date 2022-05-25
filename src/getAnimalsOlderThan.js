const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((parametro) => parametro.name === animal)
    .residents.every((idade) => idade.age >= age);
}
// console.log(getAnimalsOlderThan("lions", 12));

module.exports = getAnimalsOlderThan;
