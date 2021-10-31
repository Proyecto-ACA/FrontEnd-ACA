const axios = require('axios');

axios.get('http://localhost:3023/signs/getAll')
  .then((response) => {
    console.log(response.data);
  });