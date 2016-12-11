var express     = require('express');
var app         = express();
var exphbs      = require('express-handlebars');

// static for files
app.use( '/public', express.static( __dirname + '/public' ) );

// settings handlebars
var hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

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

    res.render('main', {
        body: 'Raymond Seger',
        showTitle: false,
        people: [
        "Yehuda Katz",
        "Alan Johnson",
        "Charles Jolley"
    ]
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});