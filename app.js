const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const location = process.argv[2];

if (!location) {
  console.log("For weather in e.g. Berlin, type 'node app.js Berlin'");
  return;
} else {
  geocode(location, (error, data) => {
    if (error) {
      return console.log(error);
    }

    forecast(data.latitude, data.logitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(`In ${data.location}:`);
      console.log(forecastData);
    });
  });
}
