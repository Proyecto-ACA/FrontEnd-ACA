/* Se obtienen las categorías*/
axios.get(api+'category/getAll')
      .then(function (response) {
          console.log('categorias', response.data);
        document.getElementById('category').innerHTML = 
        response.data.map(function (category) 
        {
          return (        
                  '<option value="'+category.id+'">'+category.name+'</option>'
          );
        }).join('');
        })
        .catch(function (err) {
          document.getElementById('obteniendo').innerHTML = '<li class="text-danger">' + err.message + '</li>';
        });
/* Se obtienen los niveles */
        axios.get(api+'lesson/level/getAll')
      .then(function (response) {
          console.log('niveles', response.data);
        document.getElementById('level').innerHTML = 
        response.data.map(function (category) 
        {
          return (        
                  '<option value="'+category.id+'">'+category.name+'</option>'
          );
        }).join('');
        })
        .catch(function (err) {
          document.getElementById('obteniendo').innerHTML = '<li class="text-danger">' + err.message + '</li>';
        });
/* Función para agregar una nueva lección*/
(function () {
    document.getElementById('post').onclick = function () 
    {
        var name = document.getElementById('name').value;
        var category = document.getElementById('category');
        var category_id = category.options[category.selectedIndex].value;
        var category_id_int = parseInt(category_id);
        var level = document.getElementById('level');
        var level_id = level.options[level.selectedIndex].value;
        var level_id_int = parseInt(level_id);
        var image = document.getElementById('image').value;
        var description = document.getElementById('description').value;

        var obj = new Object();
        obj.name = name;
        obj.category = category_id_int;
        obj.level = level_id_int
        obj.image = image;
        obj.description = description;
        

        console.log('objeto',obj);
        var jsonString= JSON.stringify(obj);  
        axios.post(api + 'lesson/lesson/save', JSON.parse(jsonString))
        .then(function (res) {
          if (confirm("Se agrego con exito!\n ¿Desea regresar?")) 
          {
            window.open("/admin/lesson","_self");
          } else {
            
          }
            })
        .catch(function (err) {
            alert(JSON.parse(jsonString))
        });
    };
  })();