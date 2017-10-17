// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

var express = require("express");
var router = express.Router();
var db = require("../models");




module.exports = function(app) {

//GET routes
////////////////////////////////////////////////
  app.get("/home/artist/:id", function(req, res) {
    //findAll returns all of the users favorite artists from table
    db.FavoriteArtists.findAll({}).then(function(dbFavoriteArtists) {
      res.json(dbFavoriteArtists)
    })
  });

//POST routes
////////////////////////////////////////////////
  app.post("/artist/:artistName", function(req, res) {
    ////////^will need to update
      console.log(req.body);
      // create takes an argument of an object describing the item we want to
      // insert into our table. In this case we just we pass in an object with a text
      // and complete property (req.body)
      db.favoriteArtists.create({
        artist: req.body.artist,
      }).then(function(dbFavoriteArtists) {
        // We have access to the favoriteArtist as an argument inside of the callback function
        res.json(dbFavoriteArtists);
      });
    });

  // DELETE route for deleting todos. You can access the FavoriteArtists id in req.params.id
  app.delete("/home/:id", function(req, res) {
    db.Music_db.destroy({
      where: {
        id:req.params.id
      }
    }).then(function(dbFavoriteArtists) {
      res.json(dbFavoriteArtists);
    });
  });
};
