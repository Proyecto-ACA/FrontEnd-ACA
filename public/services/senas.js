axios.get(api+'signs/getAll')
      .then(function (response) {
        document.getElementById('obteniendo').innerHTML = 
        response.data.map(function (signs) 
        {
          return (        
          '<div class="grid-item">'+
            '<div class="card" style="width: 18rem;">'+
              '<a href="sign?id='+signs.id+'"><img class="card-img-top" src="'+signs.image+'" alt="Card image cap"/>'
                +'<div class="card-body">'
                  +'<h5 class="card-title">'+signs.name+'</h5>'
                +'</div></a></div>'
          +'</div>'
          );
        }).join('');
        })
        .catch(function (err) {
          document.getElementById('obteniendo').innerHTML = '<li class="text-danger">' + err.message + '</li>';
        });