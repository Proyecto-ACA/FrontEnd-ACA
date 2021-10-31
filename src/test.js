const axios = require('axios');

axios.get('https://api.github.com/users/mapbox')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });


  axios.get('http://localhost:3023/category/getAll')
  .then((response) => {
    console.log(response.data);
  });
  
  axios.get('http://localhost:3023/signs/getAll')
  .then((response) => {
    console.log(response.data);
  });