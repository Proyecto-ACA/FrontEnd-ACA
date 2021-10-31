axios.get(api+'category/getAll')
      .then(function (response) {
        document.getElementById('obteniendo').innerHTML = 
        response.data.map(function (category) 
        {
          return (        
          '<div class="grid-item">'+
            '<div class="card" style="width: 18rem;">'+
              '<a href="sign/categoria"><img class="card-img-top" src="'+category.image+'" alt="Card image cap"/>'
                +'<div class="card-body">'
                  +'<h5 class="card-title">'+category.name+'</h5>'
                +'</div></a></div>'
          +'</div>'
          );
        }).join('');
        })
        .catch(function (err) {
          document.getElementById('obteniendo').innerHTML = '<li class="text-danger">' + err.message + '</li>';
        });