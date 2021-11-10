axios.get(api+'lesson/lesson/getAll')
      .then( (response) => {
        document.getElementById('obteniendo').innerHTML = 
        response.data.map( (category) =>
        {
          return (        
          '<div class="grid-item">'+
            '<div class="card" style="width: 20rem; height: 20rem">'+
              '<a class="contenedor" href="/catalogo?id='+category.id+'"><img class="card-img-top" src="'+category.image+'" alt="Card image cap"/>'
                +'<div class="centrado">'
                  +'<h5>'+category.name+'</h5>'
                +'</div></a></div>'
          +'</div>'
          );
        }).join('');
        })
        .catch( (err) => {
          document.getElementById('obteniendo').innerHTML = '<li class="text-danger">' + err.message + '</li>';
        });