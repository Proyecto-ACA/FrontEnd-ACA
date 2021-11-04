axios.get(api+'users/getAll')
      .then(function (response) 
      {
        
        document.getElementById('mytable').innerHTML = 
        response.data.map(function (user) 
        {
          // console.log("Sena : ",signs.name,signs)
          return (        
            '<tr>'+
                '<th scope="row">'+user.id+'</th>'+
                    '<td>'+user.name+'</td>'+
                    '<td>'+user.rol_id+'</td>'+
                    '<td>'+'<a class="btn btn-sm btn-warning" href="/admin/edit_word?id=' +signs.id+'">Editar</a>'+'</td>'+
                    '<td>'+'<a class="btn btn-sm btn-danger" onClick="deleteconfirmation('+signs.id+')">Eliminar</a>'+'</td>'+
            '</tr>'
          );
        }).join('');
        })
        .catch(function (err) {
          document.getElementById('mytable').innerHTML = '<li class="text-danger">' + err.message + '</li>';
        });