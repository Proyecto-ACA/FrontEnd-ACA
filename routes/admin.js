var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/users', (req, res, next)=>{
  if(req.isAuthenticated()) return next();
  res.redirect("/login");
}, (req, res) => {
  res.render('admin_users', { title: 'Administrar Usuarios' });
});

router.get('/words', (req, res, next)=>{
  if(req.isAuthenticated()) return next();
  res.redirect("/login");
}, (req, res) => {
  res.render('admin_word', { title: 'Administrar de palabras' });
});

router.get('/category', (req, res, next)=>{
  if(req.isAuthenticated()) return next();
  res.redirect("/login");
}, (req, res) => {
  res.render('admin_category', { title: 'Administrar de Categorias' });
});


router.get('/edit_word', (req, res, next)=>{
  if(req.isAuthenticated()) return next();
  res.redirect("/login");
}, (req, res) => {
  res.render('admin_word_edit', { title: 'Editar palabra' });
});

router.get('/add_word', (req, res, next)=>{
  if(req.isAuthenticated()) return next();
  res.redirect("/login");
}, (req, res) => {
  res.render('admin_word_add', { title: 'Agregar palabra' });
});

module.exports = router;
