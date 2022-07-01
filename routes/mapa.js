var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mapa', { title: 'Mapa' , user: req.user});
});

router.get('/mapa', function(req, res, next) {
  res.send('hola');
});


module.exports = router;