var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('lecciones', { title: 'Lecciones' });
});

router.get('/leccion', function(req, res, next) {
  res.render('leccion', { title: 'Leccion' });
});

router.get('/leccion1', function(req, res, next) {
  res.render('leccion1', { title: 'Leccion' });
});

module.exports = router;
