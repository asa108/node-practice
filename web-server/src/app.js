const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for express config
const puclicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// setup handlebars engine and view lcoation
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(path.join(puclicPath)));

app.get("", (req, res) => {
  res.render("index", {
    title: "weather",
    name: "Asane mead",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Asane",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Asane",
  });
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
