const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiZHRheWxvcjEyMyIsImEiOiJja2FqeGxqbnIwZXlsMnpwNm1reXhkanp6In0.hW59qRJX5VW_QO6UC95R2g&limit=1`;

  request(
    { url: url, json: true },
    (error, response) => {
      if (error) {
        callback(
          "Unable to connect to location services!",
          undefined
        );
      } else if (
        response.body.features.length === 0
      ) {
        callback(
          "Unable to find location. Try another search.",
          undefined
        );
      } else {
        callback(undefined, {
          latitude:
            response.body.features[0].center[1],
          logitude:
            response.body.features[0].center[0],
          location:
            response.body.features[0].place_name,
        });
      }
    }
  );
};

module.exports = geocode;
