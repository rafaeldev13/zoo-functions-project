const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const result = [];
  const employee = data.employees.find((parametro) => parametro.id === id);
  const getFirstAnimal = data.species.find((firstAnimal) => firstAnimal
    .id === employee.responsibleFor[0]);
  const getOlderAnimal = getFirstAnimal.residents.sort((x, y) => y.age - x.age)[0];
  result.push(getOlderAnimal.name, getOlderAnimal.sex, getOlderAnimal.age);
  return result;
}
module.exports = getOldestFromFirstSpecies;
