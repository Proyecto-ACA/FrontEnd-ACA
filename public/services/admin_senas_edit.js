var full_url = document.URL; // Get current url
var url_array = full_url.split('=') // Split the string into an array with / as separator
var last_segment = url_array[url_array.length-1];  // Get the last part of the array (-1)
// alert( last_segment ); // Alert last segment
// alert(api+'signs/getAll?id='+last_segment);
var lista_Categorias;
//obtener nombres de categorias

axios.get(api+'category/getAll')
      .then(function (response) {
        document.getElementById('category').innerHTML = 
        response.data.map(function (category) 
        {
          return (        
                  '<option value="'+category.id+'">'+category.name+'</option>'
          );
        }).join('');
    })
        .catch(function (err) {
          document.getElementById('container-edit').innerHTML = '<li class="text-danger">' + err.message + '</li>';
});

axios.get(api+'signs/getOne/'+last_segment)
      .then(function (response) {
        document.getElementById('id').value = response.data.id;
        document.getElementById('name').value = response.data.name;
        document.getElementById('category').value= response.data.category_id;
        document.getElementById('image').value= response.data.image;
        document.getElementById('description').value= response.data.description;
        document.getElementById('sign').value= response.data.sign;
    })
    .catch(function (err) {
          document.getElementById('container-edit').innerHTML = '<li class="text-danger">' + err.message + '</li>';
});     
(function () {
    document.getElementById('post').onclick = function () 
    {
        var get_id = document.getElementById('id').value;
        var get_id_int = parseInt(get_id);
        var get_name = document.getElementById('name').value;
        var get_category = document.getElementById('category');
        var get_category_id = get_category.options[get_category.selectedIndex].value;
        var get_category_id_int = parseInt(get_category_id);
        var get_description = document.getElementById('description').value;
        var get_image = document.getElementById('image').value;
        var get_sign = document.getElementById('sign').value;
        var obj = new Object();
        obj.id = get_id_int;
        obj.name = get_name;
        obj.category_id = get_category_id_int;
        obj.image = get_image;
        obj.description = get_description;
        obj.sign = get_sign;

        var jsonString= JSON.stringify(obj);      
        axios.patch(api + 'signs/update', JSON.parse(jsonString))
        .then(function (res) {
          if (confirm("Se cambio con exito!\n ¿Desea regresar?")) 
          {
            window.open("/admin/words","_self");
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