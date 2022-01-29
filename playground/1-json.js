const fs = require("fs");

const buffer = fs.readFileSync("1-json.json");
const res = buffer.toString();
const data = JSON.parse(res);

data.name = "Asane";
data.age = 13;

const userJSON = JSON.stringify(data);
fs.writeFileSync("1-json.json", userJSON);

// const buffer = fs.readFileSync("1-json.json");
// const respose = buffer.toString();
// const data = JSON.parse(respose);
// console.log(data.title);

// const book = {
//   title: "this",
//   author: "Steve",
// };

// const json = JSON.stringify(book);
// fs.writeFileSync("1-json.json", json);

// console.log(json); // {"title":"this","author":"Steve"}

// const bookJ = JSON.parse(json);
// console.log(bookJ); // { title: 'this', author: 'Steve' }
