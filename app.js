var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
const cors = require('cors');

var book = require('./routes/book');
var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://heroku_z4ml8bpb:vv5uf45cv23rl501ekpq02fkka@ds151612.mlab.com:51612/heroku_z4ml8bpb', { useMongoClient: true, promiseLibrary: require('bluebird') })
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(express.static(path.join(__dirname, 'dist')));
app.set('view engine', 'html');
app.use('/books', express.static(path.join(__dirname, 'dist')));
app.use('/book', book);
app.use(cors());

// Fånga 404 och skicka vidare till felhanterare
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Felhantering
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // Rendering av felmeddelande enligt status
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;