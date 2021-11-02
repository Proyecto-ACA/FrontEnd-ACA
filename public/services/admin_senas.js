axios.get(api+'signs/getAll')
      .then(function (response) 
      {
        
        document.getElementById('mytable').innerHTML = 
        response.data.map(function (signs) 
        {
          console.log("Sena : ",signs.name,signs)
          return (        
            '<tr>'+
                '<th scope="row">'+signs.id+'</th>'+
                    '<td>'+signs.name+'</td>'+
                    '<td>'+signs.description+'</td>'+
                    '<td><img class="d-inline-block align-top" src='+signs.image+' width="30" height="30" alt="" /></td>'+
                    '<td>'+signs.category_id+'</td>'+
                    '<td><img class="d-inline-block align-top" src='+signs.sign+' width="30" height="30" alt="" /></td>'+
                    '<td>'+'<a class="btn btn-sm btn-warning" href="/admin/edit?id=' +signs.id+'">Editar</a>'+'</td>'+
                    '<td>'+'<a class="btn btn-sm btn-danger" href="/delete/'+signs.id +'">Eliminar</a>'+'</td>'+
            '</tr>'
          );
        }).join('');
        })
        .catch(function (err) {
          document.getElementById('mytable').innerHTML = '<li class="text-danger">' + err.message + '</li>';
        });