var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var passport = require('passport');
var session = require('express-session');
require('./passport/passport')(passport);

var indexRouter = require('./routes/index');
var leccionRouter = require('./routes/leccion');
var adminRouter = require('./routes/admin');
var evaluacionRouter = require('./routes/evaluacion');
var estadisticasRouter = require('./routes/estadisticas');
var signRouter = require('./routes/sign');
var usersRouter = require('./routes/users');
var searchRouter = require('./routes/search');
const testRouter = require('./routes/test');
const mapRouter = require('./routes/mapa');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser("t3mp3st"));
app.use(session({
  secret: "t3mp3st",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/test', testRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalogo', signRouter);
app.use('/admin', adminRouter);
app.use('/evaluacion', evaluacionRouter);
app.use('/estadisticas', estadisticasRouter);
app.use('/leccion', leccionRouter);
app.use('/search', searchRouter);
app.use('/mapa', mapRouter);


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
