//funcion para añadir items a lecciones
var full_url = document.URL; // Get current url
var url_array = full_url.split('=') // Split the string into an array with / as separator
var last_segment = url_array[url_array.length - 1]; // Get the last part of the array (-1)
var mytype = document.getElementById("mytype");
var itemword = document.getElementById("itemword");
var itemvideo = document.getElementById("itemvideo");

mytype.addEventListener("change", function() {
    itemclassdisplay();
});

axios.get(api + 'signs/getAllId')
    .then((response) => {
        console.log('signs', response.data);
        document.getElementById('mysign').innerHTML =
            response.data.map((category) => {
                return (
                    '<option value="' + category.id + '">' + category.name + '</option>'
                );
            }).join('');
    })
    .catch((err) => {
        document.getElementById('obteniendo').innerHTML = '<li class="text-danger">' + err.message + '</li>';
    });

(() => {
    document.getElementById('post').onclick = function () {
        var category = document.getElementById('mytype');
        var category_id = category.options[category.selectedIndex].value;
        var category_id_int = parseInt(category_id);
        var level = document.getElementById('mysign');

        var level_id = level.options[level.selectedIndex].value;
        var level_id_int = parseInt(level_id);
        var image = document.getElementById('video').value;

        var obj = new Object();
        obj.lesson = last_segment;
        obj.type = category_id_int;

        if (category_id_int == 1) { //seña
            obj.sign = level_id_int
            aceptar(obj);
        } else {
            var myvideo = new Object();
            myvideo.name = 'video';
            myvideo.category_id = 1;
            myvideo.image = 'video';
            myvideo.description = 'video';
            myvideo.sign = image;
            myvideo.active = 2;
            var videosign= JSON.stringify(myvideo);  
            axios.post(api + 'signs/save', JSON.parse(videosign))
                .then( (res) => {
                    console.log('video guardado', res.data.data.id);
                    obj.sign = res.data.data.id
                    aceptar(obj);
                })
                .catch((err) => {
                    alert(JSON.parse(jsonString))
                });

        }


    };
})();


function aceptar(parser) {
    console.log('data a guardar:', parser);
    var jsonString= JSON.stringify(parser); 
    axios.post(api + 'lesson/lessonsign/save', JSON.parse(jsonString))
        .then(function (res) {
            if (confirm("Se agrego con exito!\n ¿Desea regresar?")) {
                window.open("/admin/items_lesson?id=" + last_segment, "_self");
            } else {

            }
        })
        .catch((err) => {
            alert(JSON.parse(jsonString))
        });
}


function itemclassdisplay(){
    if(mytype.value == "1"){
        itemvideo.style.display = "none";
        itemword.style.display = "";
    } else if(mytype.value == "2"){
        itemword.style.display = "none";
        itemvideo.style.display = ""
    }
}

function goBack() {
    window.open("/admin/items_lesson?id=" + last_segment,"_self");
}