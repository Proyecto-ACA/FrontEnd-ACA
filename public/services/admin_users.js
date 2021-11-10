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

axios.get(api+'users/getAll')
      .then(function (response) 
      {
        
        document.getElementById('mytable').innerHTML = 
        response.data.map(function (user) 
        {
          return (        
            '<tr>'+
                '<th scope="row">'+user.id+'</th>'+
                    '<td>'+user.name+'</td>'+
                    '<td>'+user.rol_id+'</td>'+
                    '<td>'+'<a class="btn btn-sm btn-primary" href="/admin/edit_user?id=' +user.id+'">Editar</a>'+'</td>'+
                    '<td>'+'<a class="btn btn-sm btn-danger" onClick="deleteconfirmation('+user.id+')">Eliminar</a>'+'</td>'+
            '</tr>'
          );
        }).join('');
        })
        .catch(function (err) {
          document.getElementById('mytable').innerHTML = '<li class="text-danger">' + err.message + '</li>';
        });
