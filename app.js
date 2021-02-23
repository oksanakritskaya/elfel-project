var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var messageRouter = require('./routes/message');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/message', messageRouter);
app.use('/jquery.js', express.static(path.join(__dirname, 'node_modules/jquery/dist/jquery.js')));
app.use('/jquery.inputmask.js', express.static(path.join(__dirname, 'node_modules/inputmask/dist/jquery.inputmask.min.js')));
app.use('/inputmask.binding.js', express.static(path.join(__dirname, 'node_modules/inputmask/dist/bindings/inputmask.binding.js')));
app.use('/bootstrap.js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js/bootstrap.js')));
app.use('/bootstrap.css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.css')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
