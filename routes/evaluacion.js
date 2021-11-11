var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('evaluaciones', { title: 'Evaluaciones' , user: req.user});
});

router.get('/evaluacion', function(req, res, next) {
  res.render('evaluacion', { title: 'Evaluacion' , user: req.user});
});

router.get('/evaluacion_item', (req, res, next)=>{
  res.render('evaluacion', { title: 'Evaluacion' , user: req.user});
});

router.get('/examen1', function(req, res, next) {
  res.render('exam1', { title: 'Evaluacion' , user: req.user});
});

module.exports = router;
