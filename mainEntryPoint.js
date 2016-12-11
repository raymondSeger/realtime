var express     = require('express');
var app         = express();
var exphbs      = require('express-handlebars');
var server      = require('http').Server(app);
var io          = require('socket.io')(server);

// static for files
app.use( '/public', express.static( __dirname + '/public' ) );

// settings handlebars
var hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// socket IO
io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});

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

server.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});