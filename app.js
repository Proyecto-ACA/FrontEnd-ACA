var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aRouter = require('./routes/a');
var categoriaABCRouter = require('./routes/categoriaABC');
var ppalRouter = require('./routes/ppal');
var user_adminRouter = require('./routes/user_admin');
var word_adminRouter = require('./routes/word_admin');
var evaluaciones = require('./routes/evaluaciones');
var evaluacion = require('./routes/evaluacion');
var lecciones = require('./routes/lecciones');
var leccion = require('./routes/leccion');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/a', aRouter);
app.use('/categoriaABC', categoriaABCRouter);
app.use('/ppal', ppalRouter);
app.use('/user_admin', user_adminRouter);
app.use('/word_admin', word_adminRouter);
app.use('/evaluaciones', evaluaciones);
app.use('/evaluacion', evaluacion);
app.use('/lecciones', lecciones);
app.use('/leccion', leccion);

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
