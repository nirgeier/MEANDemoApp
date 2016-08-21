var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var photos = require('./routes/photos');

// Express v4
var multer = require('multer');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set the upload images directory
app.set('photos', path.join(__dirname + '/public/images'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(multer({dest: './uploads/'}).single('photo'));

//
// Setting our images.list route
//
app.get('/', photos.list);

//
// Set the upload image support
//
app.get('/upload', photos.form);
app.post('/upload', photos.submit(app.get('photos')));

//
// Add the download middleware
//
app.get('/photo/:id/download', photos.download(app.get('photos')));

app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    res.render('404', {
            title: 'Page not found'
        });
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
