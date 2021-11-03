var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', (req, res, next)=>{
    if(req.isAuthenticated()) return next();
    res.redirect("/login");
  }, (req, res) => {
    res.render('search', { title: 'Buscando' });
  });
  
module.exports = router;
