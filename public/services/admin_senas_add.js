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
          document.getElementById('obteniendo').innerHTML = '<li class="text-danger">' + err.message + '</li>';
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
        axios.post(api + 'signs/save', JSON.parse(jsonString))
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