/* Función para eliminar un usuario*/
function deleteconfirmation(id) 
{ 
  if (confirm("¿Seguro que desea eliminar al usuario?")) 
  {   
    axios.delete(api+'users/delete',{ params: { id: id } }).then(function (res) {
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

/* Función para listar los roles */
axios.get(api+'rol/getAll')
      .then(function (response) {
        document.getElementById('rol').innerHTML = 
        response.data.map(function (rol) 
        {
          return (        
                  '<option value="'+rol.id+'">'+rol.name+'</option>'
          );
        }).join('');
    })
        .catch(function (err) {
          document.getElementById('container-edit').innerHTML = '<li class="text-danger">' + err.message + '</li>';
});

/* Función para listar los usuarios */
axios.get(api+'users/getAll')
      .then(function (response) 
      {
        
        document.getElementById('mytable').innerHTML = 
        response.data.map(function (user) 
        {
          return (        
            '<tr>'+
                '<td class="w-45">'+user.name+'</td>'+
                '<td class="w-45">'+user.rol_id+'</td>'+
                '<td>'+'<a class="btn btn-sm btn-primary" href="/admin/edit_user?id=' +user.id+'">Editar</a>'+'</td>'+
                '<td>'+'<a class="btn btn-sm btn-danger" onClick="deleteconfirmation('+user.id+')">Eliminar</a>'+'</td>'+
        '</tr>'
          );
        }).join('');
        })
        .catch(function (err) {
          document.getElementById('mytable').innerHTML = '<li class="text-danger">' + err.message + '</li>';
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
