var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Import routes and give the server access to them.

// var routes = require("./");

// app.use(routes);

app.listen(PORT, function() {
  console.log("Listening at https://localhost:" + PORT);
});
