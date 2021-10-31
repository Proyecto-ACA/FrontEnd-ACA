const axios = require('axios').default;


async function getCategories() {
  try {
    const response = await axios.get('category/getAll');
    return response;
    // console.log(response);
  } catch (error) {
    console.error(error);
  }
}
module.exports = function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/json'
  });
  res.write(JSON.stringify(getCategories()));
  // console.log(getCategories())
  res.end();
};
getCategories().then(
  (data) => 
    console.log(data)
);




