var full_url = document.URL; // Get current url
var url_array = full_url.split('=') // Split the string into an array with / as separator
var last_segment = url_array[url_array.length-1];  // Get the last part of the array (-1)
// alert( last_segment ); // Alert last segment
// alert(api+'signs/getAll?id='+last_segment); 

//Funcion para obtener la lista de señas/palabras
axios.get(api+'signs/getCategory?category_id='+last_segment)
      .then(function (response) {
        console.log("signs: ", response.data);
        document.getElementById('obteniendo').innerHTML = 
        response.data.map(function (signs) 
        {
          return (        
          '<div class="grid-item">'+
            '<div class="card" style="width: 20rem; height: 20rem">'+
              '<a class="contenedor" href="catalogo/palabra?id='+signs.id+'"><img class="card-img-top" src="'+signs.image+'" alt="Card image cap"/>'
                +'<div class="centrado">'
                  +'<h5>'+((signs.name.length <= 2)?"":signs.name)+'</h5>'
                +'</div></a></div>'
          +'</div>'
          );
        }).join('');
        })
        .catch(function (err) {
          document.getElementById('obteniendo').innerHTML = '<li class="text-danger">' + err.message + '</li>';
        });