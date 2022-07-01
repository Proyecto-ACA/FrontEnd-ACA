//funcion para editar evaluaciones
var full_url = document.URL; // Get current url
var url_array = full_url.split('=') // Split the string into an array with / as separator
var last_segment = url_array[url_array.length-1];  // Get the last part of the array (-1)


/* Test a modificar */
axios.get(api+'test/test/get?id='+last_segment)
      .then( (response) => {
        console.log('responce one', response.data[0]);
        document.getElementById('name').value = response.data[0].name;
        document.getElementById('category').value= response.data[0].category.id;
        document.getElementById('level').value= response.data[0].difficulty.id;
      })
    .catch( (err) => {
          document.getElementsByClassName('container-fluid').innerHTML = '<li class="text-danger">' + err.message + '</li>';
});   


/* Se obtienen las categorías*/
axios.get(api+'test/category/getAll')
      .then(function (response) {
          console.log('categorias', response.data);
        document.getElementById('category').innerHTML = 
        response.data.map( (category) => {
          return (        
                  '<option value="'+category.id+'">'+category.name+'</option>'
          );
        }).join('');
        })
        .catch( (err) => {
          document.getElementById('obteniendo').innerHTML = '<li class="text-danger">' + err.message + '</li>';
        });
/* Se obtiene la dificultad */
        axios.get(api+'test/difficulty/getAll')
      .then( (response) => {
          console.log('niveles', response.data);
        document.getElementById('level').innerHTML = 
        response.data.map( (category) => {
          return (        
                  '<option value="'+category.id+'">'+category.name+'</option>'
          );
        }).join('');
        })
        .catch(function (err) {
          document.getElementById('obteniendo').innerHTML = '<li class="text-danger">' + err.message + '</li>';
        });

( () => {
    document.getElementById('post').onclick = function () 
    {
        var name = document.getElementById('name').value;
        var category = document.getElementById('category');
        var category_id = category.options[category.selectedIndex].value;
        var category_id_int = parseInt(category_id);
        var level = document.getElementById('level');
        var level_id = level.options[level.selectedIndex].value;
        var level_id_int = parseInt(level_id);

        var obj = new Object();

        obj.id = last_segment;
        obj.name = name;
        obj.category = category_id_int;
        obj.difficulty = level_id_int


        console.log('objeto',obj);
        var jsonString= JSON.stringify(obj);  

        axios.patch('http://localhost:3023/test/test/update', JSON.parse(jsonString))
        .then(function (res) {
          if (confirm("Se agrego con exito!\n ¿Desea regresar?")) 
          {
            window.open("/admin/test","_self");
          } else {
            
          }
            })
        .catch(function (err) {
            alert(JSON.parse(jsonString))
        });
    };
  })();