var express     = require('express');
var app         = express();
var handlebars  = require('handlebars');

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
    var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
        "{{kids.length}} kids:</p>" +
        "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
    var template = handlebars.compile(source);

    var data = { "name": "Alan", "hometown": "Somewhere, TX",
        "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
    var result = template(data);
    res.send( result );
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});