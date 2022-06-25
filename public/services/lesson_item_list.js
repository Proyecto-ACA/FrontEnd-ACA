const { default: axios } = require("axios");

var full_url = document.URL; // Obtiene la URL
var url_array = full_url.split('=') // Divide el string
var last_segment = url_array[url_array.length -1]; //Obtien la ultima parte del arreglo

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
                '<div class="d-block m-4">' +
                '<div class="card" style="width: 100%; height: 5rem">' +
                '<a class="contenedor" onclick="selectTarget(' + iteration++ + ')"><img class="card-img-top"'+ ((item.sign.name.length <= 2) ? 'style="width: 7%;' : '') + '" src="' +
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