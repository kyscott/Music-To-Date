const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const axios = require("axios");
const routes = require("./routes/api-routes");
//Express route?
const app = express();
const PORT = process.env.PORT || 3001;


//Require models for syncing to db
let db = require("./models");

//Express app handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // was true
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});
