function deleteconfirmation(id) 
{ 
  if (confirm("¿Seguro que desea eliminar la categoria?")) 
  {   
    axios.delete(api+'category/delete',{ params: { id: id } }).then(function (res) {
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


axios.get(api+'category/getAllOrderbyId')
      .then(function (response) 
      {
        
        document.getElementById('mytable').innerHTML = 
        response.data.map(function (category) 
        {
          // console.log("Sena : ",signs.name,signs)
          return (        
            '<tr>'+
                '<th scope="row">'+category.id+'</th>'+
                    '<td>'+category.name+'</td>'+
                    '<td><img class="d-inline-block align-top" src='+category.image+' width="30" height="30" alt="" /></td>'+
                    '<td>'+'<a class="btn btn-sm btn-warning" href="/admin/edit_category?id=' +category.id+'">Editar</a>'+'</td>'+
                    '<td>'+'<a class="btn btn-sm btn-danger" onClick="deleteconfirmation('+category.id+')">Eliminar</a>'+'</td>'+
            '</tr>'
          );
        }).join('');
        })
        .catch(function (err) {
          document.getElementById('mytable').innerHTML = '<li class="text-danger">' + err.message + '</li>';
        });