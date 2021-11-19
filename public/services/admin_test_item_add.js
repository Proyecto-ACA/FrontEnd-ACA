var full_url = document.URL; // Get current url
var url_array = full_url.split('=') // Split the string into an array with / as separator
var last_segment = url_array[url_array.length-1];  // Get the last part of the array (-1)


axios.get(api+'signs/getAllId')
    .then( (response) => {
        console.log('signs', response.data);
    document.getElementById('mysign').innerHTML = 
    response.data.map( (category) => {
        return (        
                '<option value="'+category.id+'">'+category.name+'</option>'
        );
    }).join('');
    })
    .catch( (err) => {
        document.getElementById('obteniendo').innerHTML = '<li class="text-danger">' + err.message + '</li>';
});

( () => {
    document.getElementById('post').onclick = function () 
    {
        var level = document.getElementById('mysign');
        var level_id = level.options[level.selectedIndex].value;
        var level_id_int = parseInt(level_id);
        
        var enunciado = document.getElementById('video').value;

        var obj = new Object();
        obj.statement = enunciado;
        obj.sign = level_id_int 

        var myquestion= JSON.stringify(obj);  
        axios.post(api + 'test/question/save', JSON.parse(myquestion))
            .then( (res) => {
                console.log('question guardado', res.data.data.id);
                var myQuestionSaveItem = new Object();
                myQuestionSaveItem.test = last_segment;
                myQuestionSaveItem.question = res.data.data.id;
                aceptar(myQuestionSaveItem);
            })
            .catch( (err) => {
                alert(JSON.parse(jsonString))
            });

        }

        
        aceptar(obj);

        
  })();


function aceptar(parser){
    console.log('data a guardar:', parser);
    var jsonString= JSON.stringify(parser); 
    axios.post(api + 'test/testxquestion/save', JSON.parse(jsonString))
        .then(function (res) {
        if (confirm("Se agrego con exito!\n ¿Desea regresar?")) 
        {
            goBack();
        } else {
            
        }
            })
        .catch( (err) => {
            alert(JSON.parse(jsonString))
        });
}

function goBack() {
    window.open("/admin/items_test?id=" + last_segment,"_self");
}