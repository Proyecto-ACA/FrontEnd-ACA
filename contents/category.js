const axios = require('axios');

axios.get('http://localhost:3023/category/getAll')
  .then((response) => {
    console.log(response.data);
  });