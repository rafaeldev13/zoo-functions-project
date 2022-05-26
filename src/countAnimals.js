const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (typeof animal === 'undefined') {
    const animais = {};
    species.forEach((parametro) => {
      animais[parametro.name] = parametro.residents.length;
    });
    return animais;
  }
  const { residents } = species.find((specie) => specie.name === animal.specie);

  if (animal.sex) {
    return residents.filter((resident) => resident.sex === animal.sex).length;
  }
  return residents.length;
}

module.exports = countAnimals;
