var mytable = document.getElementById('mytable');
var filtro = document.getElementById('filtro_busqueda')

function deleteconfirmation(id) 
{ 
  if (confirm("¿Seguro que desea eliminar la test?")) 
  {   
    axios.delete(api+'test/test/delete',{ params: { id: id } }).then( (res) => {
      if (confirm("¡Se elimino con exito!")) 
      {
        location.reload();
      } else {
      }
        })
    .catch( (err) => {
        alert(JSON.parse(jsonString))
    });
  } else {
    
  }
}
axios.get(api+'test/test/getAll').then( (response) => {
    console.log('data', response.data);

  mytable.innerHTML = 
  response.data.map( (signs) => {
    // console.log("Sena : ",signs.name,signs)
    return (        
      '<tr>'+
          '<th scope="row">'+signs.id+'</th>'+
              '<td>'+signs.name+'</td>'+
              '<td>'+signs.category.name+'</td>'+
              '<td>'+signs.difficulty.name+'</td>'+
              //'<td><img class="d-inline-block align-top" src='+signs.sign+' width="30" height="30" alt="" /></td>'+
              '<td>'+'<a class="btn btn-sm btn-primary" href="/admin/edit_test?id=' +signs.id+'">Editar</a>'+'</td>'+
              '<td>'+'<a class="btn btn-sm btn-danger" onClick="deleteconfirmation('+signs.id+')">Eliminar</a>'+'</td>'+
      '</tr>'
    );
  }).join('');
  })
  .catch( (err) => {
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