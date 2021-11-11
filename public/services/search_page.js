var full_url = document.URL; // Get current url
var url_array = full_url.split('=') // Split the string into an array with / as separator
var last_segment = url_array[url_array.length-1];  // Get the last part of the array (-1)
// alert( last_segment ); // Alert last segment
// alert(api+'signs/getAll?id='+last_segment);

axios.get(api+'category/getbyName?name='+last_segment)
      .then(function (response) {
        document.getElementById('obteniendo-search-categorias').innerHTML = 
        response.data.map(function (category) 
        {
          return (        
          '<div class="col-4 p-2">'+
            '<div class="card" style="width: 20rem; height: 8rem">'+
              '<a class="contenedor" href="/catalogo?id='+category.id+'"><img class="card-img-top" src="'+category.image+'" alt="Card image cap"/>'
                +'<div class="centrado">'
                  +'<h5 class="h5-aux">'+category.name+'</h5>'
                +'</div></a></div>'
          +'</div>'
          );
        }).join('');
        })
        .catch(function (err) {
          document.getElementById('obteniendo').innerHTML = '<li class="text-danger">' + err.message + '</li>';
        });

axios.get(api+'signs/getbyName?name='+last_segment)
        .then(function (response) {
          document.getElementById('obteniendo-search-palabras').innerHTML = 
          response.data.map(function (signs) 
          {
            return (        
              '<div class="col-3 p-2">'+
                '<div class="card" style="width: 15rem; height: 6rem">'+
                '<a class="contenedor" href="catalogo/palabra?id='+signs.id+'"><img class="card-img-top" src="'+signs.image+'" alt="Card image cap"/>'
                  +'<div class="centrado">'
                    +'<h5 style="font-size:0.5em">'+signs.name+'</h5>'
                  +'</div></a></div>'
            +'</div>'
            );
          }).join('');
          })
          .catch(function (err) {
            document.getElementById('obteniendo').innerHTML = '<li class="text-danger">' + err.message + '</li>';
          });
