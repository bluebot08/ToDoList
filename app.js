// Install Modules

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

// initialze express

const app = express();

// Set express to serve static pages and images

app.use("/public", express.static("public"));

// initialze body-parser

app.use(bodyParser.urlencoded({ extended: true }));

// Get route

app.get("/", function (req, res) {
  var today = new Date();

  if (today.getDay() === 6 || today.getDay() === 0)
    res.write("<h1>Yay it's the weekend!</h1>");
  else {
    res.sendFile(__dirname + "/index.html");
  }
});

// Set express to listen to port 3000 with message

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
