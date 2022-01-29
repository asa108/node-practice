const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// Geocoding
// Adress lat/long weather

geocode("Okinawa", (error, data) => {
  if (error) {
    return console.log(error);
  }
  console.log("Error", error);
  console.log("data", data);

  forecast(data.latitude, data.longtitude, (error, forecasData) => {
    if (error) {
      return console.log(error);
    }
    console.log(data.location);
    console.log(forecasData);
  });
});
