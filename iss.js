const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) { 

}

const url = "https://api.ipify.org?format=json";
request(url, (error, response, body) => {
  if (body !== "[]") {
    const data = JSON.parse(body);
    console.log(data.ip);
  } else {
    error = "Breed not found.";
  }
  
// callback(error, desc);
});


module.exports = { fetchMyIP };


// {"ip":"69.172.160.70"}