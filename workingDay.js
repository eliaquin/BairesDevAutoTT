const WORKING_DAY = [
  { description: "finishing mobile version of check in activities", hours: 0.5 },
  { description: "Adressing QA feedback", hours: 1.5 },
];

const workingDayNormalized = WORKING_DAY.reduce((accum, current) => {
  const { description, hours } = current;
  if (hours <= 1) {
    accum.push({ description, hours });
  } else {
    let hrs = hours;
    let k = 1;
    while (hrs > 0) {
      accum.push({ description: `${description} - ${k}`, hours: hrs >= 1 ? 1 : hrs });
      hrs -= 1;
      k += 1;
    }
  }
  return accum;

}, []);

module.exports.workingDay = workingDayNormalized;
