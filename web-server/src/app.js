const path = require("path");
const express = require("express");

const app = express();
const puclicPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(path.join(puclicPath)));

app.get("", (req, res) => {
  res.send("<h1>hello</h1>");
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "Asane",
      age: 23,
    },
    {
      name: "Adom",
      age: 20,
    },
  ]);
});

app.get("/about", (req, res) => {
  res.send("<h1>about page</h1>");
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Boston",
  });
});

app.listen(3000, () => {
  console.log("Server is up on 3000");
});
