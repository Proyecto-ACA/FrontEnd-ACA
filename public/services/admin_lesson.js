var mytable = document.getElementById('mytable');
var filtro = document.getElementById('filtro_busqueda')

function deleteconfirmation(id) 
{ 
  if (confirm("¿Seguro que desea eliminar la leccion?")) 
  {   
    axios.delete(api+'lesson/lesson/delete',{ params: { id: id } }).then(function (res) {
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
axios.get(api+'lesson/lesson/getAll').then( (response) => {
    console.log('data', response.data);

  mytable.innerHTML = 
  response.data.map(function (signs) 
  {
    // console.log("Sena : ",signs.name,signs)
    return (        
      '<tr>'+
              '<td>'+signs.name+'</td>'+
              '<td>'+signs.description+'</td>'+
              '<td><img class="d-inline-block align-top" src='+signs.image+' width="30" height="30" alt="" /></td>'+
              '<td>'+signs.category.name+'</td>'+
              '<td>'+signs.level.name+'</td>'+
              //'<td><img class="d-inline-block align-top" src='+signs.sign+' width="30" height="30" alt="" /></td>'+
              '<td>'+'<a class="btn btn-sm btn-secondary" href="/admin/items_lesson?id=' +signs.id+'">Items</a>'+'</td>'+
              '<td>'+'<a class="btn btn-sm btn-primary" href="/admin/edit_lesson?id=' +signs.id+'">Editar</a>'+'</td>'+
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

function goBack() {
  window.open("/","_self");
}