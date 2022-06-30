var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', isLoggedIn, function(req, res, next) {
    res.render('evaluaciones', { title: 'Evaluaciones' , user: req.user});
});

router.get('/evaluacion', isLoggedIn, function(req, res, next) {
    res.render('evaluacion', { title: 'Evaluacion' , user: req.user});
});

router.get('/evaluacion_item', isLoggedIn, (req, res, next)=>{
    res.render('evaluacion', { title: 'Evaluacion' , user: req.user});
});

router.get('/examen1', isLoggedIn, function(req, res, next) {
    res.render('exam1', { title: 'Evaluacion' , user: req.user});
});

//Funcion de logueo
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/login');
}

module.exports = router;
