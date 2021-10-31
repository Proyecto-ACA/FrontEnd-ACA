const axios = require('axios').default;

axios.get('signs/getAll')
.then(response => {
    // Obtenemos los datos
    this.response = response.data
    // console.log(response.data);
})
.catch(e => {
    // Capturamos los errores
    console.log(e)
})
module.exports = function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/json'
  });
  res.write(JSON.stringify(category));
  console.log(category)
  res.end();
};