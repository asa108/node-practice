const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=f15a4558d90149681e1e2f40a1724a64&query=45,-75&units=f";

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("error", error);
});

request.end();
