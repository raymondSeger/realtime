var express     = require('express');
var app         = express();
var colors      = require('colors');

console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red); // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass

var name = 'Marak';
console.log(colors.green('Hello %s'), name);

app.use( '/public', express.static( __dirname + '/public' ) );

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});