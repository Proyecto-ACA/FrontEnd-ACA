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
          return (        
            '<tr>'+
                '<th scope="row">'+category.id+'</th>'+
                    '<td>'+category.name+'</td>'+
                    '<td><img class="d-inline-block align-top" src='+category.image+' width="30" height="30" alt="" /></td>'+
                    '<td>'+'<a class="btn btn-sm btn-primary" href="/admin/edit_category?id=' +category.id+'">Editar</a>'+'</td>'+
                    '<td>'+'<a class="btn btn-sm btn-danger" onClick="deleteconfirmation('+category.id+')">Eliminar</a>'+'</td>'+
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
