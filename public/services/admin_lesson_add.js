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

(function () {
    document.getElementById('post').onclick = function () 
    {
        var name = document.getElementById('name').value;
        var category = document.getElementById('category');
        var category_id = category.options[category.selectedIndex].value;
        var category_id_int = parseInt(category_id);
        var level = document.getElementById('level');
        var level_id = category.options[level.selectedIndex].value;
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
        axios.post('http://localhost:3023/lesson/lesson/save', JSON.parse(jsonString))
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