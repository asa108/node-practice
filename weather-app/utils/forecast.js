const request = require("request");

const forecast = (latitude, longtitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=f15a4558d90149681e1e2f40a1724a64&query=' + latitude + ',' + longtitude + '&units=f";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to conect", undefined);
    } else if (response.body.error) {
      callback("Unable to find", undefined);
    } else {
      callback(
        undefined,
        response.body.current.weather_descriptions[0] +
          " current: " +
          response.body.current.temperature +
          " feels like " +
          response.body.current.feelslike
      );
    }
  });
};

module.exports = forecast;
