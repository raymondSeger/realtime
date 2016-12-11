var express     = require('express');
var app         = express();
var WebTorrent  = require('webtorrent');



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

    var client = new WebTorrent();

    var torrentId = 'magnet:?xt=urn:btih:08D1242838D11B7E81564291D9204D108EBDA485&dn=Compost_Everything_The_Good_Guide_to_Extreme_Composting.epub&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2fglotorrents.pw%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fzer0day.to%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce';

    client.add(torrentId, function (torrent) {

        console.log( torrentId );
        console.log( torrent );
        res.send('a');
    });

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});