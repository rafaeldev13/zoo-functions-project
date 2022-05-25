const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') {
    return {};
  }
  const name = data.employees
    .find((par) => par.firstName === employeeName || par.lastName === employeeName);
  return name;
}

module.exports = getEmployeeByName;
