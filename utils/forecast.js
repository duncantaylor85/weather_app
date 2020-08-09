const request = require("request");
/**
 * @function
 * @param {Number} lat
 * @param {Number} lon
 * @param {(error : String, data : String) => void} callback
 */
const forecast = (lat, lon, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=7b13d774c2840c88860b9c8f17621799`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(
        undefined,
        `It's currently ${response.body.current.temp} degrees celsius with ${response.body.current.weather[0].description}`
      );
    }
  });
};

module.exports = forecast;
