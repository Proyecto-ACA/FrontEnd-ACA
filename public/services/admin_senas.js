//funcion para administrar señas
var mytable = document.getElementById('mytable');
var filtro = document.getElementById('filtro_busqueda')

function deleteconfirmation(id) 
{ 
  if (confirm("¿Seguro que desea eliminar la palabra?")) 
  {   
    axios.delete(api+'signs/delete',{ params: { id: id } }).then(function (res) {
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
axios.get(api+'signs/getAllId').then(function (response) 
{
  mytable.innerHTML = 
  response.data.map(function (signs) 
  {
    return (        
      '<tr>'+
              '<td>'+signs.name+'</td>'+
              '<td>'+signs.description+'</td>'+
              '<td><img class="d-inline-block align-top" src='+signs.image+' width="30" height="30" alt="" /></td>'+
              '<td>'+signs.category_id+'</td>'+
              '<td>'+'<a class="btn btn-sm btn-primary" href="/admin/edit_word?id=' +signs.id+'">Editar</a>'+'</td>'+
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