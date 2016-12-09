var express         = require('express');
var app             = express();
var cors            = require('cors');


app.use( cors() );
app.use( '/public', express.static( __dirname + '/public' ) );




// create cookie in middleware
app.use('/', function (req, res, next) {
    next();
});


app.get('/', function (req, res) {
    res.send( 'a' );
});







app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});