axios.get(api+'signs/getOne/1')
        .then
        (
            function (response) 
            {
                // console.log(response)
                // console.log(response.data)
                document.getElementById('obteniendo').innerHTML =
                
                '<main id="content" class="main-content">'+
                    '<img class="gift" src="'+response.data.sign+'" alt="">'+
                '</main>'+
                    
                '<aside class="side">'+
                    '<img class="imagea" src="'+response.data.image+'" alt="">'+
                '</aside>'+
                    
                '<aside class="twin">'+
                    '<h5 class="texta">'+response.data.description+'</h5>'+
                '</aside>'
            }
        )
        .catch
        (
        function (err) 
            {
            document.getElementById('obteniendo').innerHTML =
            '<li class="text-danger">' + err.message + '</li>';
            }
        );