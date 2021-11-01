axios.get(api+'signs/getAll')
        .then(function (response) {
        document.getElementById('obteniendo').innerHTML = 
        response.data.map(function (signs) 
        {
        return (
            '<main id="content" class="main-content">'+
                '<img class="" src="'+signs.sign+'" alt="">'+
            '</main>'+
                
            '<aside class="side">'+
                '<img class="imagea" src="'+signs.image+'" alt="">'+
            '</aside>'+
                
            '<aside class="twin">'+
                '<h5 class="card-title">'+signs.description+'</h5>'+
            '</aside>'
        );
        }).join('');
        })
        .catch(function (err) {
        document.getElementById('obteniendo').innerHTML = '<li class="text-danger">' + err.message + '</li>';
        });