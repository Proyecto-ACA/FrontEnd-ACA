var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('evaluaciones', { title: 'Evaluaciones' });
});

module.exports = router;
