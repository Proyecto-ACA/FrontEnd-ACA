var full_url = document.URL; // Get current url
var url_array = full_url.split('=') // Split the string into an array with / as separator
var last_segment = url_array[url_array.length-1];  // Get the last part of the array (-1)

var mytable = document.getElementById('mytable');
var filtro = document.getElementById('filtro_busqueda')

function deleteconfirmation(id) 
{ 
  if (confirm("¿Seguro que desea eliminar el item de leccion?")) 
  {   
    axios.delete(api+'lesson/lessonsign/delete',{ params: { id: id } }).then(function (res) {
      if (confirm("¡Se elimino con exito!")) 
      {
        location.reload();
      } else {
      }
        })
    .catch(function (err) {
        alert(JSON.parse(jsonString))
    });
  } else {
    
  }
}
axios.get(api+'lesson/lessonsign/get',{ params: { lesson: last_segment } }).then( (response) => {
    console.log('data', response.data);

  mytable.innerHTML = 
  response.data.map( (signs) => {
    // console.log("Sena : ",signs.name,signs)
    return (        
      '<tr>'+
          '<th scope="row">'+signs.id+'</th>'+
              '<td>'+(signs.type==1? 'palabra' : 'video')+'</td>'+
              '<td>'+signs.sign.name+'</td>'+
              '<td>'+signs.sign.category_id+'</td>'+
              '<td>'+'<a class="btn btn-sm btn-danger" onClick="deleteconfirmation('+signs.id+')">Eliminar</a>'+'</td>'+
      '</tr>'
    );
  }).join('');
  })
  .catch(function (err) {
    mytable.innerHTML = '<li class="text-danger">' + err.message + '</li>';
});
        
const filtrar = () => {
  var texto = filtro_busqueda.value.toLowerCase();
  for (let i=0; i<mytable.childElementCount; i++){
    let busqueda = mytable.children[i].children[1].textContent.toLowerCase();
    if(busqueda.indexOf(texto) !== -1){
      mytable.children[i].style.display = '' 
  } else{
      mytable.children[i].style.display = 'none'
  }
  }
}

filtro_busqueda.addEventListener('keyup',filtrar);