const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((data) => {
    data.map((x) => {
      const dateTime = new Date(0);
      dateTime.setUTCSeconds(x.risetime);
      const duration = x.duration;
      console.log(`Next pass at ${dateTime} for ${duration} seconds.`);
    });
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });