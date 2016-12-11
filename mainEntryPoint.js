var express     = require('express');
var app         = express();
var moment      = require('moment');

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
    console.log ( moment().format('MMMM Do YYYY, h:mm:ss a') ); // December 11th 2016, 10:08:46 am
    console.log ( moment().format('dddd') );                     // Sunday
    console.log ( moment().format("MMM Do YY") );               // Dec 11th 16
    console.log ( moment().format('YYYY [escaped] YYYY') );      // 2016 escaped 2016
    console.log ( moment().format() );
    res.send( 'a' );
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});