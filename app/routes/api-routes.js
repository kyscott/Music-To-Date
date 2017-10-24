// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

var router = require("express").Router();
var db = require("../models");
const Twitter = require('twitter');
const client = new Twitter({
  consumer_key: 'nJlM7YmJSSe8KdHNhL4K2MDcm',
  consumer_secret: 'RYc44SLvHDnC6GMxSD5EcZy6beKs97sTuGIKAhDyC4kwDJ8G00',
  access_token_key: '887345485547274240-eqv8Q3KvT5XCfBD97nJL6OezPWspVLc',
  access_token_secret: 'bir1nfgKXvctBZDbFwUB1uan5ddmrYHocSvdwrsBKYxKw'
});

//GET routes
////////////////////////////////////////////////
  router.get('/get-tweets', (req, res) => {
    console.log('route worked');
    var params = {screen_name: 'nodejs'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        res.json(tweets);
      }
    });
  });

  //POST routes
  ////////////////////////////////////////////////
  router.post("/artist", function(req, res) {
    console.log("artist being routed");
      db.artist.findOrCreate({ where: { artistName: req.body.artist }
      }).then(function(dbartist) {
      res.json(artistName);
    });
  });

module.exports = router;

//How to find all artists from user_artist joint table when signing in
  // router.get("/home", function(req, res) {
  //   User.findAll({
  //     include: [{
  //       model: Artist,
  //       through: {
  //         user_artist;
  //       }
  //     }]
  //   });
  // });


  // DELETE route for deleting todos. You can access the FavoriteArtists id in req.params.id
  // router.delete("/home/:id", function(req, res) {
  //   db.Music_db.destroy({
  //     where: {
  //       id:req.params.id
  //     }
  //   }).then(function(dbFavoriteArtists) {
  //     res.json(dbFavoriteArtists);
  //   });
  // });
