var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/users',isLoggedIn, (req, res)=>{
  res.render('admin_users', { title: 'Administrar Usuarios' });
});
router.get('/edit_user', isLoggedIn,(req, res)=>{
  res.render('admin_users_edit', { title: 'Editar Categoria' });
});

//CATEGORIES
router.get('/category', isLoggedIn, (req, res)=>{
  res.render('admin_category', { title: 'Administrar de Categorias' });
});

router.get('/edit_category', isLoggedIn,(req, res)=>{
  res.render('admin_category_edit', { title: 'Editar Categoria' });
});

router.get('/add_category', isLoggedIn,(req, res)=>{
  res.render('admin_category_add', { title: 'Agregar Categoria' });
});

//WORD

router.get('/words', isLoggedIn, (req, res)=>{
  res.render('admin_word', { title: 'Administrar de palabras' });
});

router.get('/edit_word', isLoggedIn, (req, res)=>{
  res.render('admin_word_edit', { title: 'Editar palabra' });
});

router.get('/add_word', isLoggedIn, (req, res)=>{
  res.render('admin_word_add', { title: 'Agregar palabra' });
});

// --------- funcion de login
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }
  return res.redirect('/login');
}

module.exports = router;
