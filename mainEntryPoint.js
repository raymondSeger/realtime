var express     = require('express');
var app         = express();
var validator   = require('validator');

// static for files
app.use( '/public', express.static( __dirname + '/public' ) );

/*
 * Middlewares
 */
// create cookie in middleware
app.use('/', function (req, res, next) {
    next();
});

/*
 * Routes
 */
app.get('/', function (req, res) {

    console.log( validator.isEmail('foo@bar.com') );
    res.send( 'a' );

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});