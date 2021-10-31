const axios = require('axios');

axios.get('https://api.github.com/users/mapbox')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
