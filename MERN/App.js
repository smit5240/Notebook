const express = require("express");
const App = express();
const connect = require("./connect");
const cors = require("cors");

connect();
// const middleware = (req, res, next) => {
//   res.send("Hello i am middleware ");
//   console.log("Hello my name is middleware");
//   next();
// };
App.use(cors());
App.use(express.json());
// App.use("/", require("./src/router/Addnote"));
App.use(require("./src/router/Newnoteadd"));
App.use(require("./src/router/all"));

// App.get("/", (req, res) => {
//   res.send("Hello Guys My Name is Smit");
//   res.end();
// });
// App.get("/about", (req, res) => {
//   console.log("Hello my name is aboutpage");
//   res.send("I Am About page");
// });
App.listen(5000, () => {
  console.log("http://localhost:5000");
});
