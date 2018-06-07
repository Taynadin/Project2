// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
// =============================================================
// Requiring our models
var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/house", function(req, res) {

    db.Houses.findAll({}).then(function(dbHouses) {
      res.json(dbHouses);
    });
  });

  // POST route for saving a new post
  app.post("/api/house", function(req, res) {
    db.Houses.create(req.body).then(function(dbHouses) {
      res.json(dbHouses);
    });
  });

};
