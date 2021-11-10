var full_url = document.URL; // Get current url
var url_array = full_url.split('=') // Split the string into an array with / as separator
var last_segment = url_array[url_array.length-1];  // Get the last part of the array (-1)
// alert( last_segment ); // Alert last segment
// alert(api+'signs/getAll?id='+last_segment);

axios.get(api+'users/getOne/'+last_segment)
      .then(function (response) {
        document.getElementById('id').value = response.data.id;
        document.getElementById('name').value = response.data.name;
        document.getElementById('image').value= response.data.rol_id;
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
        var get_rol_id = document.getElementById('image').value;
        
        var obj = new Object();
        obj.id = get_id_int;
        obj.name = get_name;
        obj.rol_id = get_rol_id;

        var jsonString= JSON.stringify(obj);      
        axios.patch(api+'users/update', JSON.parse(jsonString))
        .then(function (res) {
          if (confirm("Se cambio con exito!\n ¿Desea regresar?")) 
          {
            window.open("/admin/users","_self");
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
