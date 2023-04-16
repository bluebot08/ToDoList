// Install Modules

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

// initialze express

const app = express();

// Set express to serve static pages and images

// app.use("/public", express.static("public"));

// initialze body-parser

app.use(bodyParser.urlencoded({ extended: true }));

// Setting up EJS

app.set("view engine", "ejs");

// Get route

app.get("/", function (req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";
  if (currentDay === 0) {
    day = "Sunday";
  } else if (currentDay === 1) {
    day = "Monday";
  } else if (currentDay === 2) {
    day = "Tuesday";
  } else if (currentDay === 3) {
    day = "Wednesday";
  } else if (currentDay === 4) {
    day = "Thursday";
  } else if (currentDay === 5) {
    day = "Friday";
  } else if (currentDay === 6) {
    day = "Saturday";
  }
  res.render("list", { kindOfDay: day });
});

// Set express to listen to port 3000 with message

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
