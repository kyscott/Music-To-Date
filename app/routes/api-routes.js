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
  let params = {q: artistToSearch};

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
  router.get('/get-tweets', (req, res) => {
    console.log(artistToSearch);
    console.log('route worked');
  })

  router.get('/userId', (req, res) => {
    db.user.findAll({
      where: {
        email: req.query.email
      }
    })
      .then(function(data) {
      res.json(data);
    })
  });

  router.get('/favorites-names', (req, res) => {
    db.artist.findAll({
      where: {
        artistId: req.query.ids
      }
    }).then(function(data) {
      res.json(data);
    })
  })

  router.get('/favorites', (req, res) => {
    db.favorite.findAll({
      where: {
        userId: req.query.userId
      }
    })
      .then(function(data) {
      res.json(data);
    })
  });

  //POST routes
  router.post("/artist", function(req, res) {
    const user_id = req.user.id;

      db.artist.findOrCreate({
        where: { artistName: req.body.artist }
      }).then(function(dbartist) {

        //FIND THE USER by email
        // console.log(dbartist[0].dataValues.artistId);
        // console.log(user_id)
        db.favorite.create({
          'userId': user_id,
          'artistId': dbartist[0].dataValues.artistId
        }).then(function(favorit){
          res.json(favorit);
        });
    });
  });

module.exports = router;
