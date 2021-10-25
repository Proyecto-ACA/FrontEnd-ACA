var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/login', passport.authenticate('local',{
  successRedirect: '/',
  failureRedirect: '/login'
}));

router.get('/', (req, res, next)=>{
  if(req.isAuthenticated()) return next();
  res.redirect("/login");
}, (req, res) => {
  res.render('home', { title: 'Home' });
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


module.exports = router;
