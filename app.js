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
  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      // handle unexpected input
      console.log("Error: current day is equal to: " + currentDay);
      break;
  }

  res.render("list", { kindOfDay: day });
});

// Set express to listen to port 3000 with message

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
