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

        obj.name = name;
        obj.category = category_id_int;
        obj.difficulty = level_id_int


        console.log('objeto',obj);
        var jsonString= JSON.stringify(obj);  

        axios.post(api + 'test/test/save', JSON.parse(jsonString))
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