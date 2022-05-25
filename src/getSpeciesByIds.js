const data = require('../data/zoo_data');

const onlyId = data.species;

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  }
  const array = [];
  ids.forEach((id) => {
    const nome = onlyId.find((index) => index.id === id);
    array.push(nome);
  });
  return array;
}

module.exports = getSpeciesByIds;
