var full_url = document.URL; // Get current url
var url_array = full_url.split('=') // Split the string into an array with / as separator
var last_segment = url_array[url_array.length-1];  // Get the last part of the array (-1)
// alert( last_segment ); // Alert last segment
// alert(api+'signs/getAll?id='+last_segment);

axios.get(api+'lesson/lessonsign/get',{ params: { lesson: last_segment } })
      .then( (response) => {
          console.log(response.data);
        document.getElementById('obteniendo').innerHTML = 
        response.data.map( (item) =>
        {
          return (        
          '<div class="grid-item">'+
            '<div class="card" style="width: 20rem; height: 20rem">'+
              '<a class="contenedor" href="catalogo/palabra?id='+item.id+'"><img class="card-img-top" src="'+
              ((item.type == 2)? '../images/play.png':item.sign.image)+'" alt="Card image cap"/>'
                +'<div class="centrado">'
                  +'<h5>'+((item.sign.name.length <= 2)?"":item.sign.name)+'</h5>'
                +'</div></a></div>'
          +'</div>'
          );
        }).join('');
        })
        .catch( (err) => {
          document.getElementById('obteniendo').innerHTML = '<li class="text-danger">' + err.message + '</li>';
        });
