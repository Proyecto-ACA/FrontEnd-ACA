var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/palabra', (req, res, next)=>{
  if(req.isAuthenticated()) return next();
  res.redirect("/login");
}, (req, res) => {
  res.render('sign', { title: 'Seña' });
});

router.get('/', (req, res, next)=>{
  if(req.isAuthenticated()) return next();
  res.redirect("/login");
}, (req, res) => {
  res.render('categoria', { title: 'Categoria' });
});


module.exports = router;
