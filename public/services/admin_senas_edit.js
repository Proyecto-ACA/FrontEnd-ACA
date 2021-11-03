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

        document.getElementById('name').value = response.data.name;
        document.getElementById('category').value= response.data.category_id;
        document.getElementById('image').value= response.data.name;
        document.getElementById('description').value= response.data.description;
        document.getElementById('sign').value= response.data.sign;
        
         
      })
    .catch(function (err) {
          document.getElementById('container-edit').innerHTML = '<li class="text-danger">' + err.message + '</li>';
});     
(function () {
    document.getElementById('post').onclick = function () 
    {
        var name = document.getElementById('name').value;
        var category = document.getElementById('category');
        var category_id = category.options[category.selectedIndex].value;
        var category_id_int = parseInt(category_id);
        var image = document.getElementById('image').value;
        var description = document.getElementById('description').value;
        var sign = document.getElementById('sign').value;
        var obj = new Object();
        obj.name = name;
        obj.category_id = category_id_int;
        obj.image = image;
        obj.description = description;
        obj.sign = sign;

        var jsonString= JSON.stringify(obj);      
        axios.post('http://localhost:3023/signs/save', JSON.parse(jsonString))
        .then(function (res) {
          if (confirm("Se agrego con exito!\n ¿Desea regresar?")) 
          {
            window.open("/admin/words","_self");
          } else {
            
          }
            })
        .catch(function (err) {
            alert(JSON.parse(jsonString))
        });
    };
  })();        
//obtener id que necesitamos
// axios.get(api+'signs/getOne/'+last_segment)
//         .then
//         (
//             function (response) 
//             {
//                 // console.log(response)
//                 // console.log(response.data)
//                 document.getElementById('container-edit').innerHTML =
                
//                 '<form class="form" role="form" onsubmit="return false;">'+
//                 '<div class="form-group">'+
//                     '<div class="input-group mb-2" ><span class="input-group-text">Nombre</span>'+
//                       '<input value="'+response.data.name+'" class="form-control" id="name" type="text" placeholder="Nombre" aria-label="Nombre" aria-describedby="basic-addon1" /></div>'+
//                     '<div class="input-group mb-2"><span class="input-group-text">Descripcion</span>'+
//                       '<textarea value="'+response.data.description+'" class="form-control" id="description" rows="4"></textarea></div>'+
//                     '<div class="input-group mb-2">'+
//                         '<span class="input-group-text">Categoria</span>'+
//                         '<select class="form-select" onchange="this.className="categorias"" id="categorias">'+
//                             '<option value="1">Abecedario</option>'+'</select></div>'+
//                     '<div class="input-group mb-2"><span class="input-group-text">URL de imagen</span>'+
//                       '<input value="'+response.data.image+'" class="form-control" id="image" type="text" placeholder="URL de imagen" aria-label="URL de imagen" aria-describedby="basic-addon1" /></div>'+
//                     '<div class="input-group mb-2"><span class="input-group-text">URL de Seña</span>'+
//                       '<input value="'+response.data.sign+'" class="form-control" id="sign" type="text" placeholder="URL de Seña" aria-label="URL de Seña" aria-describedby="basic-addon1" /></div>'+
//                 '</div>'
//                 '<div class="d-grid gap-2">'+
//                     '<button class="btn btn-primary" id="post" onClick="update('+response.data.id+')" type="button">Guardar Palabra</button></div>'+
//                     '</form>'
                            
//             }
//         )
//         .catch
//         (
//         function (err) 
//             {
//             document.getElementById('container-edit').innerHTML =
//             '<li class="text-danger">' + err.message + '</li>';
//             }
//         );