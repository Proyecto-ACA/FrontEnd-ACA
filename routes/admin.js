var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/users',isLoggedIn, (req, res)=>{
  res.render('admin_users', { title: 'Administrar Usuarios' , user: req.user});
});
router.get('/edit_user', isLoggedIn,(req, res)=>{
  res.render('admin_users_edit', { title: 'Editar Categoria' , user: req.user});
});

//CATEGORIAS
router.get('/category', isLoggedIn, (req, res)=>{
  res.render('admin_category', { title: 'Administrar de Categorias' , user: req.user});
});

router.get('/edit_category', isLoggedIn,(req, res)=>{
  res.render('admin_category_edit', { title: 'Editar Categoria' , user: req.user});
});

router.get('/add_category', isLoggedIn,(req, res)=>{
  res.render('admin_category_add', { title: 'Agregar Categoria' , user: req.user});
});

//letras

router.get('/words', isLoggedIn, (req, res)=>{
  res.render('admin_word', { title: 'Administrar de palabras' , user: req.user});
});

router.get('/edit_word', isLoggedIn, (req, res)=>{
  res.render('admin_word_edit', { title: 'Editar palabra' , user: req.user});
});

router.get('/add_word', isLoggedIn, (req, res)=>{
  res.render('admin_word_add', { title: 'Agregar palabra' , user: req.user});
});

//lecciones

router.get('/lesson', isLoggedIn, (req, res)=>{
  res.render('admin_lesson', { title: 'Administrar de lecciones', user: req.user });
});

router.get('/edit_lesson', isLoggedIn, (req, res)=>{
  res.render('admin_lesson_edit', { title: 'Editar leccion', user: req.user });
});

router.get('/add_lesson', isLoggedIn, (req, res)=>{
  res.render('admin_lesson_add', { title: 'Agregar leccion', user: req.user });
});

router.get('/items_lesson', isLoggedIn, (req, res)=>{
  res.render('admin_lesson_item', { title: 'Items leccion', user: req.user });
});

router.get('/add_items_lesson', isLoggedIn, (req, res)=>{
  console.log('hola, mundo ;v');
  console.log('usuario: ' , req.user);
  res.render('admin_lesson_item_add', { title: 'Agregar Items leccion', user: req.user });
});

//exxamenes
router.get('/test', isLoggedIn, (req, res)=>{
  res.render('admin_test', { title: 'Administrar de Evaluaciones', user: req.user });
});

router.get('/edit_test', isLoggedIn, (req, res)=>{
  res.render('admin_test_edit', { title: 'Editar Evaluacion', user: req.user });
});

router.get('/add_test', isLoggedIn, (req, res)=>{
  res.render('admin_test_add', { title: 'Agregar Evaluacion', user: req.user });
});

router.get('/items_test', isLoggedIn, (req, res)=>{
  res.render('admin_test_item', { title: 'Items test', user: req.user });
});

router.get('/add_items_test', isLoggedIn, (req, res)=>{
  res.render('admin_test_item_add', { title: 'Agregar Items test', user: req.user });
});
//funcion de login
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }
  return res.redirect('/login');
}

module.exports = router;
