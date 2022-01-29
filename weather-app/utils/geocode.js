const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json.json?access_token=pk.eyJ1IjoiYXNhbmUxMDgiLCJhIjoiY2t2bHJqcnhnMDN2cTJubW80OGY2bnpscSJ9.-0hyri-XUA-v3JRfGwZXMA&limit=1";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find", undefined);
    } else {
      //   callback();
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longtitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;