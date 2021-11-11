var full_url = document.URL; // Get current url
var url_array = full_url.split('=') // Split the string into an array with / as separator
var last_segment = url_array[url_array.length-1];  // Get the last part of the array (-1)
// alert( last_segment ); // Alert last segment
// alert(api+'signs/getAll?id='+last_segment)


axios.get(api+'signs/getAllId')
    .then( (response) => {
        console.log('niveles', response.data);
    document.getElementById('level').innerHTML = 
    response.data.map( (category) => {
        return (        
                '<option value="'+category.id+'">'+category.sign+'</option>'
        );
    }).join('');
    })
    .catch( (err) => {
        document.getElementById('obteniendo').innerHTML = '<li class="text-danger">' + err.message + '</li>';
});

( () => {
    document.getElementById('post').onclick = function () 
    {
        var category = document.getElementById('type');
        var category_id = category.options[category.selectedIndex].value;
        var category_id_int = parseInt(category_id);
        var level = document.getElementById('sign');
        var level_id = category.options[level.selectedIndex].value;
        var level_id_int = parseInt(level_id);
        var image = document.getElementById('video').value;

        var obj = new Object();
        obj.id = last_segment;
        obj.type = category_id_int;

        if (category_id_int==1){ //sennia
            obj.sign = level_id_int
            var jsonString= JSON.stringify(obj);  
            aceptar(jsonString);
        } else {
            var myvideo = new Object();
            myvideo.name = 'default';
            myvideo.category_id = 1;
            myvideo.image = 'deflault';
            myvideo.description = 'default';
            myvideo.sign = image;
            var videosign= JSON.stringify(myvideo);  
            axios.post('http://localhost:3023/signs/save', JSON.parse(videosign))
                .then( (res) => {
                    console.log('video guardado', res);
                    obj.sign = res.id
                    var jsonString= JSON.stringify(obj);  
                    aceptar(jsonString);
                })
                .catch( (err) => {
                    alert(JSON.parse(jsonString))
                });

        }

        
    };
  })();


function aceptar(parser){
    axios.patch('http://localhost:3023/lesson/lesson/update', JSON.parse(parser))
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
}