var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('estadisticas', { title: 'Estadisticas' , user: req.user});
});

router.get('/estadisticas', function(req, res, next) {
  res.render('estadisticas', { title: 'Estadisticas', user: req.user });
});


module.exports = router;