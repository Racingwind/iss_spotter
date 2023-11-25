// index.js
const { nextISSTimesForMyLocation } = require('./iss');


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  passTimes.map((x) => {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(x.risetime);
    const duration = x.duration;
    console.log(`Next pass at ${dateTime} for ${duration} seconds.`);
  });
});