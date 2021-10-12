var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/users', function(req, res, next) {
  res.render('user_admin', { title: 'Administrar Usuarios' });
});

router.get('/words', function(req, res, next) {
  res.render('word_admin', { title: 'Administrar Palabras' });
});

module.exports = router;
