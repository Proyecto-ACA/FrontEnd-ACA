var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/users', (req, res, next)=>{
  if(req.isAuthenticated()) return next();
  res.redirect("/login");
}, (req, res) => {
  res.render('user_admin', { title: 'Administrar Usuarios' });
});

router.get('/words', (req, res, next)=>{
  if(req.isAuthenticated()) return next();
  res.redirect("/login");
}, (req, res) => {
  res.render('word_admin', { title: 'Administrar de palabras' });
});

router.get('/edit', (req, res, next)=>{
  if(req.isAuthenticated()) return next();
  res.redirect("/login");
}, (req, res) => {
  res.render('word_admin_edit', { title: 'Administrar de palabras' });
});

router.get('/add', (req, res, next)=>{
  if(req.isAuthenticated()) return next();
  res.redirect("/login");
}, (req, res) => {
  res.render('word_admin_add', { title: 'Administrar de palabras' });
});

module.exports = router;
