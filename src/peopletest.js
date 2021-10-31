const axios = require('axios').default;

const people = axios.get('get/server');

people.then(val => console.log(val));

module.exports = function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/json'
  });
  res.write(JSON.stringify(people));
  res.end();
};
