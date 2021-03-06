//Función para mostrar las dificultades de las evaluaciones

axios.get(api+'test/test/getAll')
    .then((response) => {
        console.log("tests", response.data);
        document.getElementById('obteniendo').innerHTML = 
        response.data.map( (item) =>
        {
            return(
                '<div class="grid-item">'+
                '<div class="card" style="width: 20rem; height: 20rem">'+
                    `<a class="contenedor" href="/evaluacion/evaluacion_item?id=${item.id}"><img class="card-img-top" src="${imageselector(item.difficulty.difficulty)}" alt="Card image cap"/>`
                    +'<div class="centrado">'
                        +'<h5>'+item.name+'</h5>'
                        +'<p class="text-light">'+((item.difficulty.difficulty == 1)?"Facil":((item.difficulty.difficulty == 2)?"Medio":((item.difficulty.difficulty == 3)?"Dificil":"Muy dificil"))) +'</p>'
                    +'</div></a></div>'
                +'</div>'
            );
        }).join('');
        })
        .catch((err)=>{
            document.getElementById('obteniendo').innerHTML = '<li class="text-danger">' + err.message + '</li>';
        });

//Función para imagen acorde al nivel de dificultad
function imageselector(category){
    if(category == 1){
        console.log(category)
        return '../images/facil.jpg'}
    if(category == 2){
        console.log(category)
        return '../images/medio.jpg'}
    if(category == 3){
        console.log(category)
        return '../images/dificil.jpg'}
    if(category == 4){
        console.log(category)
        return '../images/inferno.jpg'}
}