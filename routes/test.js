//ruta para examenes
const e = require('express');
var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next)=>{
    console.log('aqui prro 2');

    axios({
        method: 'GET',
        url: 'http://localhost:3023/lesson/lessonsign/get',
        params: {
            lesson: 1,
        }
    })
    .then((response) => {
        if (e) {
            console.log('data', response.data);
            
        }
        if (response.data.code === 4012) {
        } else {
        }
    })
    .catch((error) => {
    console.log('No logro concetar a la direccion', error.message);
    })
console.log('aqui prrox2');
});

module.exports = router;