axios.get(api+'test/test/getAll')
    .then( (response) => {
        document.getElementById('obteniendo').innerHTML = 
        response.data.map( (item) =>
        {
            return (        
            '<div class="grid-item">'+
            '<div class="card" style="width: 20rem; height: 20rem">'+
                '<a class="contenedor" href="/leccion/leccion_item?id='+item.id+'"><img class="card-img-top" src="'+imageselector(item.category.category)+'" alt="Card image cap"/>'
                +'<div class="centrado">'
                    +'<h5>'+item.name+'</h5>'
                +'</div></a></div>'
            +'</div>'
            );
        }).join('');
        })
        .catch( (err) => {
            document.getElementById('obteniendo').innerHTML = '<li class="text-danger">' + err.message + '</li>';
        });

function imageselector(category){
    return '../images/play.png'
}