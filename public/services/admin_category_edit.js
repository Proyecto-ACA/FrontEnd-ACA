var full_url = document.URL; // Get current url
var url_array = full_url.split('=') // Split the string into an array with / as separator
var last_segment = url_array[url_array.length-1];  // Get the last part of the array (-1)

axios.get(api+'category/getOne/'+last_segment)
      .then(function (response) {
        document.getElementById('id').value = response.data.id;
        document.getElementById('name').value = response.data.name;
        document.getElementById('image').value= response.data.image;
      })
    .catch(function (err) {
          document.getElementsByClassName('container-fluid').innerHTML = '<li class="text-danger">' + err.message + '</li>';
});     
(function () {
    document.getElementById('post').onclick = function () 
    {
        var get_id = document.getElementById('id').value;
        var get_id_int = parseInt(get_id);
        var get_name = document.getElementById('name').value;
        var get_image = document.getElementById('image').value;
        
        var obj = new Object();
        obj.id = get_id_int;
        obj.name = get_name;
        obj.image = get_image;

        var jsonString= JSON.stringify(obj);      
        axios.patch(api+'category/update', JSON.parse(jsonString))
        .then(function (res) {
          if (confirm("Se cambio con exito!\n ¿Desea regresar?")) 
          {
            window.open("/admin/category","_self");
          } 
          else {
            alert("ERROR")
          }
            })
        .catch(function (err) {
            alert(JSON.parse(jsonString))
        });
    };
  })(); 