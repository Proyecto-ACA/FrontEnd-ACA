var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
/*
 
 ██╗      ██████╗  ██████╗ ██╗███╗   ██╗
 ██║     ██╔═══██╗██╔════╝ ██║████╗  ██║
 ██║     ██║   ██║██║  ███╗██║██╔██╗ ██║
 ██║     ██║   ██║██║   ██║██║██║╚██╗██║
 ███████╗╚██████╔╝╚██████╔╝██║██║ ╚████║
 ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝╚═╝  ╚═══╝
                                        
 
*/
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/login', passport.authenticate('local-login',{
  successRedirect: '/',
  failureRedirect: '/login'
}));
/*
 
 ███████╗██╗ ██████╗ ███╗   ██╗██╗   ██╗██████╗ 
 ██╔════╝██║██╔════╝ ████╗  ██║██║   ██║██╔══██╗
 ███████╗██║██║  ███╗██╔██╗ ██║██║   ██║██████╔╝
 ╚════██║██║██║   ██║██║╚██╗██║██║   ██║██╔═══╝ 
 ███████║██║╚██████╔╝██║ ╚████║╚██████╔╝██║     
 ╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ ╚═╝     
                                                
 
*/

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Sign up' });
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/login',
  failureRedirect: '/signup',
}));



router.get('/', isLoggedIn, (req, res, next)=>{
  res.render('home', { title: 'Lessa', user: req.user })
})

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
}); 

// ------------- Funcion de logueo
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }
  return res.redirect('/login');
}

module.exports = router;
