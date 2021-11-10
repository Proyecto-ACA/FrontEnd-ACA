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
                '<div class="flex-container">'+
                    '<div class="flex-child magenta">'+
                        '<img class="imga" src="'+response.data.sign+'" alt="">'+
                    '</div>'+
    
                '<div class="flex-child green">'+
                    '<div class="containera d-flex align-items-center justify-content-center flex-wrap">'+
                        '<div class="boxa">'+
                            '<div class="bodya">'+
                                '<div class="imgContainer"> '+
                                '<img src="'+response.data.image+'" alt=""> </div>'+
                                    '<div class="contenta d-flex flex-column align-items-center justify-content-center">'+
                                        '<div>'+
                                            '<p class="fs-6 text-white">'+response.data.description+'</p>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'
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