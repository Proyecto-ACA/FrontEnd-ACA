var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', isLoggedIn, function(req, res, next) {
  res.render('lecciones', { title: 'Lecciones' , user: req.user});
});

router.get('/leccion', isLoggedIn, function(req, res, next) {
  res.render('leccion', { title: 'Leccion', user: req.user });
});

router.get('/leccion1', isLoggedIn, function(req, res, next) {
  res.render('leccion1', { title: 'Leccion' , user: req.user});
});

router.get('/leccion_item', isLoggedIn, (req, res, next)=>{
  res.render('lesson_list', { title: 'Leccion' , user: req.user});
});

// ------------- Funcion de logueo
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }
  return res.redirect('/login');
}

module.exports = router;
