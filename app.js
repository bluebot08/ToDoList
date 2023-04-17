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
  var todayJapan = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  var day = today.toLocaleDateString("en-us", options);
  var dayJapan = todayJapan.toLocaleDateString("ja-jp", options);

  res.render("list", { kindOfDay: day, kindOfDayJapan: dayJapan });
});

// Post
app.post("/", function (req, res) {
  console.log(req.body.newItem);
});

// Set express to listen to port 3000 with message

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
