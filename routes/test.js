var express = require('express');
var router = express.Router();
const axios = 'axios'

router.get('/', (req, res, next)=>{
    console.log('aqui prro');

    axios({
        method: 'GET',
        url: 'localhost:3023',
        //data: req.body,
    })
        .then((response) => {
            //console.log('responce', response);
            if (e) {
                //e(response.data);
            }
            if (response.data.code === 4012) {
                //console.log('responce', response.data);
                //res.redirect('/logout');
            } else {
                //res.send(response.data);
            }
        })
        .catch((error) => {
        res.send(error.message);
        console.log('No logro concetar a la direccion', error.message);
        })
        .then(() => {
        //console.log('goal :v');
    });
});

module.exports = router;