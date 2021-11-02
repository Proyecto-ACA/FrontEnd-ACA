var express = require('express');
var router = express.Router();
  

router.post('/save_new_word', (req, res) => {
    console.log('Got body:', req.body);
});

module.exports = router;