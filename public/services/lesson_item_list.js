var full_url = document.URL; // Obtiene la URL
var url_array = full_url.split('=') // Divide el string
var last_segment = url_array[url_array.length - 1]; //Obtien la ultima parte del arreglo

const container = document.getElementById('obteniendo');
var lista;
var data;
var actual;

axios.get(api + 'lesson/lessonsign/get', {
    params: {
        lesson: last_segment
    }
})
.then((response)=>{
    console.log(response.data);
    data = response.data
    var iteration = 0
    lista =
        data.map((item)=> {
            return (
                // información para las cartas
                '<div class="d-block m-4">' +
                '<div class="card" style="width: 100%; height: 5rem">' +
                '<a class="contenedor" onclick="selectTarget(' + iteration++ + ')"><img class="card-img-top"'+ 
                ((item.sign.name.length <= 2) ? 'style="width: 7%;' : '') + '" src="' +
                ((item.type == 2) ? '../images/play.png' : item.sign.image) + '" alt="Card image cap"/>' +
                '<div class="centrado">' +
                '<h5>' + ((item.sign.name.length <= 2) ? "" : item.sign.name) + '</h5>' +
                '</div></a></div>' +
                '</div>'
            );
        }).join('');
        container.innerHTML = lista;
})
.catch((err) => {
    container.innerHTML = '<li class="text-danger">' + err.message + '</li>';
});

function selectTarget(flag) {
    actual = flag;
    console.log(flag, 'to render');
    console.log('lista', data);
    if (data[flag].type == 1) {
        renderSign(flag);
    } else if (data[flag].type ==2){
        renderMovie(flag);
    }
}

function goHome(){
    container.innerHTML = lista;
}

function goBackItem(){
    console.log('back');
    if (actual >= 1)
        selectTarget(actual -1);
}

function goNextItem(){
    console.log('next');
    if(actual < data.length -1)
        selectTarget(actual + 1);
}

//navegacion entre las pantallas de lecciones
function navegacion(){
    var inicio = '<div class="section-navigation mdl-bottom"> <span class="mdl-left">'
    if (actual != 0) {
        inicio += '<a onclick="goBackItem()">' +
        '<span class="larrow"><ion-icon name="caret-back-outline"></ion-icon></span> Atrás </a>'
    }
    inicio += ' </span> <span class="close"> <a onclick="goHome()">' +
    '<span class="xclose"><ion-icon class="iclose" name="close-circle-outline"></ion-icon></span>' +
    '</a> </span> <span class="mdl-right">'
    if (actual < data.length - 1) {
        inicio += '<a onclick="goNextItem()"> Siguiente <span class="rarrow"><ion-icon name="caret-forward-outline"></ion-icon></span> </a>'
    }
    inicio += ' </span></div>'
    return inicio 
}
//mostrar señas
function renderSign(flag){
    const element = data[flag].sign;
    container.innerHTML =
    `<div id="carouselExampleIndicators" class="carousel slide w-100 h-100 mt-3 bg-dark" data-ride="carousel">
        <div class="carousel-inner h-100">
            <div class="carousel-item active h-100">
                <a class="carousel-control-prev" onclick="goBackItem()" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Anterior</span>
                </a>
                <a class="carousel-control-next" onclick="goNextItem()" role="button" data-slide="next">
                    <span class="sr-only">Siguiente</span>
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
                <div class="w-100 h-100">
                    <div class="row ">
                        <div class="col-6 row">
                            <div class="col-3">
                </div>
                <div class="col-8 bg-dark d-flex align-items-center justify-content-center" style="height: 85vh" >
                    <img class="w-100" src="${element.sign}" alt="First slide">
                </div>
                </div>
                <div class="col-6 row">
                <div class="col-1">
                    </span> <span class="close"> <a onclick="goHome()">
                        <span class="xclose"><ion-icon class="iclose" name="close-circle-outline"></ion-icon></span>
                    </a> </span> <span class="mdl-right">
                </div>
                <div class="col-8">
                <div class="containera d-flex align-items-center justify-content-center flex-wrap" style="height: 85vh">
                    <div class="w-100 text-center">
                        <h1 class="text-light">${element.name}</h1>
                    </div>
                    <div class="boxa">
                        <div class="bodya">
                            <div class="imgContainer"> 
                            <img src="${element.image}" alt=""> </div>
                                <div class="contenta d-flex flex-column align-items-center justify-content-center">
                                    <div>
                                        <p class="fs-6 text-white">${element.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>`
}
//mostrar video
function renderMovie(flag){
    const element = data[flag].sign;
    `<div id="carouselExampleIndicators" class="carousel slide w-100 h-100 mt-3 bg-dark" data-ride="carousel">
        <div class="carousel-inner h-100">
            <div class="carousel-item active h-100">
                <a class="carousel-control-prev" onclick="goBackItem()" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Anterior</span>
                </a>
                <a class="carousel-control-next" onclick="goNextItem()" role="button" data-slide="next">
                    <span class="sr-only">Siguiente</span>
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
                <div class="w-100 h-100">
                    <div class="row ">
                        <div class="col-2"></div>
                        <div class="col-8" style="height: 85vh">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/DL9D8JO6Fqs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    <div class="col-2"></div>
                </div>
            </div>
        </div>
    </div>
</div>`
}