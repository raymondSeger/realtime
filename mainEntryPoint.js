var express     = require('express');
var app         = express();
var moment      = require('moment');
var q           = require('q');

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
    q.fcall(function(){
        console.log('a');
    })
        .then(function(){
            console.log('b');
        })
        .then(function(){
            console.log('c');
        })
        .then(function(){
            console.log('d');
        })
        .then(function () {
            console.log('e');
        })
        .catch(function (error) {
            // Handle any error from all above steps
        })
        .done();
    res.send( 'a' );
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});