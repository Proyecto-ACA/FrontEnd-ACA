var full_url = document.URL; // Get current url
var url_array = full_url.split('=') // Split the string into an array with / as separator
var last_segment = url_array[url_array.length-1];  // Get the last part of the array (-1)
// alert( last_segment ); // Alert last segment
// alert(api+'signs/getAll?id='+last_segment);

axios.get(api+'signs/getOne/'+last_segment)
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