const express = require("express");
const path = require("path");
const axios = require("axios");
const passport   = require('passport')
const session    = require('express-session')
const bodyParser = require('body-parser')
//Express route?
const app = express();
const routes = require("./app/routes/api-routes");
const router = express.Router();
const PORT = process.env.PORT || 3001;
var env = require('dotenv').load();


//Require models for syncing to db
let db = require("./app/models");

//Routes
// var authRoute = require('./app/routes/auth.js')(app);

//load passport strategies
require('./app/config/passport/passport.js')(passport, db.user);

//Express app handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // was true
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//For Handlebars
app.set('views', './app/views')
// app.engine('html', exphbs({
//   extname: '.html'
// }));
app.set('view engine', '.html');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use('/api', routes);

// Send every request to the React app
// Define any API routes before this runs
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.post('/api/signup', passport.authenticate('local-signup'), (req, res) => {
  res.json(req.body);
});

app.post('/api/signin', passport.authenticate('local-signin'), (req, res) => {
  console.log('hi');
  res.json(req.body);
});


// Syncing our sequelize models and then starting our Express app
// =============================================================

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});
