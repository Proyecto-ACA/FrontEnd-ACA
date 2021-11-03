(function () {
    document.getElementById('post').onclick = function () 
    {
        var name = document.getElementById('name').value;
        var image = document.getElementById('image').value;
        var obj = new Object();
        obj.name = name;
        obj.image = image;

        var jsonString= JSON.stringify(obj);      
        axios.post(api+'category/save', JSON.parse(jsonString))
        .then(function (res) {
          if (confirm("Se agrego con exito!\n ¿Desea regresar?")) 
          {
            window.open("/admin/category","_self");
          } else {
            
          }
            })
        .catch(function (err) {
            alert(JSON.parse(jsonString))
        });
    };
  })();