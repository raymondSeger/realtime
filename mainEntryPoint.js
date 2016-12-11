var express     = require('express');
var app         = express();
var request = require('request');

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
    request('http://www.google.com', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(error);
            console.log(response);
            res.send( body );
        }
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});