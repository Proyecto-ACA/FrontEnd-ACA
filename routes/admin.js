var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/users',isLoggedIn, (req, res)=>{
  res.render('admin_users', { title: 'Administrar Usuarios' , user: req.user});
});
router.get('/edit_user', isLoggedIn,(req, res)=>{
  res.render('admin_users_edit', { title: 'Editar Categoria' , user: req.user});
});

//CATEGORIES
router.get('/category', isLoggedIn, (req, res)=>{
  res.render('admin_category', { title: 'Administrar de Categorias' , user: req.user});
});

router.get('/edit_category', isLoggedIn,(req, res)=>{
  res.render('admin_category_edit', { title: 'Editar Categoria' , user: req.user});
});

router.get('/add_category', isLoggedIn,(req, res)=>{
  res.render('admin_category_add', { title: 'Agregar Categoria' , user: req.user});
});

//WORD

router.get('/words', isLoggedIn, (req, res)=>{
  res.render('admin_word', { title: 'Administrar de palabras' , user: req.user});
});

router.get('/edit_word', isLoggedIn, (req, res)=>{
  res.render('admin_word_edit', { title: 'Editar palabra' , user: req.user});
});

router.get('/add_word', isLoggedIn, (req, res)=>{
  res.render('admin_word_add', { title: 'Agregar palabra' , user: req.user});
});


router.get('/lesson', isLoggedIn, (req, res)=>{
  res.render('admin_lesson', { title: 'Administrar de lecciones' });
});

router.get('/edit_lesson', isLoggedIn, (req, res)=>{
  res.render('admin_lesson_edit', { title: 'Editar leccion' });
});

router.get('/add_lesson', isLoggedIn, (req, res)=>{
  res.render('admin_lesson_add', { title: 'Agregar leccion' });
});

// --------- funcion de login
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }
  return res.redirect('/login');
}

module.exports = router;
