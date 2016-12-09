var express     = require('express');
var app         = express();
var fs          = require('fs-extra');

app.use( '/public', express.static( __dirname + '/public' ) );

fs.mkdirs('/tmp/some/long/path/that/prob/doesnt/exist', function (err) {
    if (err) return console.error(err);
    console.log("success!");
});



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