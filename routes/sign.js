var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/sign', function(req, res, next) {
  res.render('sign', { title: 'Seña' });
});

router.get('/categoria', function(req, res, next) {
  res.render('categoria', { title: 'Categorias' });
});


module.exports = router;
