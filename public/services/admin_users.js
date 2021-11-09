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
            '</tr>'
          );
        }).join('');
        })
        .catch(function (err) {
          document.getElementById('mytable').innerHTML = '<li class="text-danger">' + err.message + '</li>';
        });
