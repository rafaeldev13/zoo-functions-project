const data = require('../data/zoo_data');

const { species, hours } = require('../data/zoo_data');

const getDays = Object.keys(hours);
const animals3 = species.map((parametro) => parametro.name);

function openToClosed(scheduleTarget) {
  const animals = species.filter((parametro) => parametro.availability.includes(scheduleTarget));
  const animals2 = animals.map((parametro) => parametro.name);
  if (scheduleTarget === getDays[6]) {
    return {
      [scheduleTarget]: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
  }
  return {
    [scheduleTarget]: {
      officeHour: `Open from ${hours[scheduleTarget]
        .open}am until ${hours[scheduleTarget].close}pm`,
      exhibition: animals2,
    },
  };
}

// console.log(openToClosed('Monday'));
function getSchedule(scheduleTarget) {
  const getAnimals = species.find((parametro) => parametro.name === scheduleTarget);
  if (!getDays.includes(scheduleTarget) && !animals3.includes(scheduleTarget)) {
    return getDays.reduce((acc, curr) => ({ ...acc, ...getSchedule(curr) }), {});
  }
  if (animals3.includes(scheduleTarget)) {
    return getAnimals.availability;
  }
  return openToClosed(scheduleTarget);
}
// console.log(getSchedule());
module.exports = getSchedule;
