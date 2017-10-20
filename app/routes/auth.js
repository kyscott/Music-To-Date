// var authController = require('../controllers/authcontroller.js');
//
// module.exports = function(app, passport) {
//   app.post('/signup', passport.authentication('local-signup')
//   };
//
//   app.get('/home', isLoggedIn, authController.homepage);
//
//   app.get('/logout', authController.logout);
// }

var authController = require('../controllers/authcontroller.js');
var path = require('path');

module.exports = function(app, passport) {

    app.post('/signup', passport.authentication('local-signup'));
    
    app.get('/home', isLoggedIn, authController.homepage);
    app.get('/', authController.logout);
}
