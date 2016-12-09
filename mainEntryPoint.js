var express         = require('express');
var app             = express();
var cookieParser    = require('cookie-parser');

app.use( cookieParser() );
app.use( '/public', express.static( __dirname + '/public' ) );

// create cookie in middleware
app.use('/', function (req, res, next) {
    var cookie = req.cookies.cookieName;
    if (cookie === undefined) {
        res.cookie('cookieName', 'raymondSeger', { maxAge: 900000, httpOnly: false });
        console.log('cookie created successfully');
    }
    next();
});

app.get('/', function (req, res) {
    res.send( req.cookies );
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});