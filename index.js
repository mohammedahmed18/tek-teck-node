var express = require("express");
require("ejs");
var app = express();

// public folder
app.use(express.static("public"));

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("index");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("Server is running");
