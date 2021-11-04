var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/palabra', isLoggedIn, (req, res, next)=>{
  res.render('sign', { title: 'Seña' });
});

router.get('/categoria', (req, res, next)=>{})

router.get('/', isLoggedIn, (req, res, next)=>{
  res.render('sign_list', { title: 'Categoria' });
});


// --------- funcion de login
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }
  return res.redirect('/login');
}

module.exports = router;
