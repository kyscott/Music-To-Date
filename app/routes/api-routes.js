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
let artistId;
router.post('/get-tweets', (req, res) => {
  artistToSearch = req.body.searchArtist;
  console.log(artistToSearch);
  var params = {q: artistToSearch};
  client.get('users/search', params, function(error, tweets, response) {
    if (!error) {
      artistId = tweets[0].id;
      console.log(artistId);
      params = {user_id: artistId};
      client.get('statuses/user_timeline', params, function(error, tweets, response) {
        res.send(tweets);
      })
    } else {
      console.log(error);
    }
  });
});
//GET routes
////////////////////////////////////////////////


  router.get('/get-tweets', (req, res) => {
    console.log(artistToSearch);
    console.log('route worked');


  })


  //POST routes
  ////////////////////////////////////////////////
  router.post("/artist", function(req, res) {
    const user_id = req.user.id;

      db.artist.findOrCreate({
        where: { artistName: req.body.artist }
      }).then(function(dbartist) {
          console.log(dbartist)
        //FIND THE USER by email
        console.log(dbartist[0].dataValues.artistId);
        console.log(user_id)
        db.favorite.create({
          'userId': user_id,
          'artistId': dbartist[0].dataValues.artistId
        }).then(function(favorit){
          res.json(favorit);
        });
    });
  });

module.exports = router;



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
