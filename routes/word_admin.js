var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('word_admin', { title: 'A' });
});

module.exports = router;
