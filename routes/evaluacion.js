var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('evaluaciones', { title: 'Evaluaciones' });
});

router.get('/evaluacion', function(req, res, next) {
  res.render('evaluacion', { title: 'Evaluacion' });
});

router.get('/evaluacion_item', (req, res, next)=>{
  res.render('evaluacion', { title: 'Evaluacion' });
});

router.get('/examen1', function(req, res, next) {
  res.render('exam1', { title: 'Evaluacion' });
});

module.exports = router;
