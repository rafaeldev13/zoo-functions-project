const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((gerente) =>
    gerente.managers.find((element) => element === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    return employees.filter((funcionario) => funcionario.managers
      .find((manager) => manager === managerId))
      .map((funcionario) => `${funcionario.firstName} ${funcionario.lastName}`);
  }
}

module.exports = { isManager, getRelatedEmployees };
