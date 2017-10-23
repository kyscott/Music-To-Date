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

let artistToSearch;

router.post('/get-tweets', (req, res) => {
  artistToSearch = req.body.searchArtist;
  artistToSearch = artistToSearch.replace(' ', '');
  console.log(artistToSearch);
  var params = {screen_name: artistToSearch};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      res.json(tweets);
    }
  });
});
//GET routes
////////////////////////////////////////////////


  router.get('/get-tweets', (req, res) => {
    console.log(artistToSearch);
    console.log('route worked');

  })

  router.get("/home/artist/:id", function(req, res) {
    //findAll returns all of the users favorite artists from table
    db.FavoriteArtists.findAll({}).then(function(dbFavoriteArtists) {
      res.json(dbFavoriteArtists)
    })
  });

//POST routes
////////////////////////////////////////////////


  router.post("/artist/:artistName", function(req, res) {
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
  router.delete("/home/:id", function(req, res) {
    db.Music_db.destroy({
      where: {
        id:req.params.id
      }
    }).then(function(dbFavoriteArtists) {
      res.json(dbFavoriteArtists);
    });
  });

module.exports = router;
