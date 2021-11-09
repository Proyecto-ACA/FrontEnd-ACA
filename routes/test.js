const e = require('express');
var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next)=>{
    console.log('aqui prro');

    axios({
        method: 'GET',
        url: 'http://localhost:3023/lesson/lessonsign/getAll',
        //data: req.body,
    })
    .then((response) => {
        //console.log('responce', response);
        if (e) {
            //e(response.data);
            //console.log(e.data);
            console.log('data', response.data);
        }
        if (response.data.code === 4012) {
            //console.log('responce', response.data);
            //res.redirect('/logout');
        } else {
            //res.send(response.data);
        }
        //console.log('responce', response.data);
    })
    .catch((error) => {
    //res.send('error.message');
    console.log('No logro concetar a la direccion', error.message);
    })
console.log('aqui prrox2');
});

module.exports = router;