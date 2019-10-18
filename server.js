//Basic depedencies that we use to run our program/server
//series of npm packages

let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");

//This sets up our express server
//We are telling node that we are creating a xpress server
let app = express();
//sets up our we will use
let PORT = process.env.PORT || 3000;

//This sets up our express app to handle the data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text);
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//The following tells our server to use these route files
//They give it a map?? of how to respond when users request data from
//different URLS.

let apiRoutes = require("./app/routing/api-routes.js");
let htmlRoutes = require("./app/routing/html-routes.js");

apiRoutes(app); //api routes
htmlRoutes(app); //html routes

//Start the server
app.listen(PORT, function() {
  console.log("The app is listening on PORT: " + PORT);
});
