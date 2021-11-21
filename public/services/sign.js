var full_url = document.URL; // Get current url
var url_array = full_url.split('=') // Split the string into an array with / as separator
var last_segment = url_array[url_array.length - 1]; // Get the last part of the array (-1)
// alert( last_segment ); // Alert last segment
// alert(api+'signs/getAll?id='+last_segment);

axios.get(api + 'signs/getOne/' + last_segment)
    .then(
        function (response) {
            // console.log(response)
            // console.log(response.data)
            document.getElementById('obteniendo').innerHTML =
            `<div id="carouselExampleIndicators" class="carousel slide w-100 h-100 mt-3 bg-dark" data-ride="carousel">
                <div class="carousel-inner h-100">
                    <div class="carousel-item active h-100">
                        <div class="w-100 h-100">
                            <div class="row ">
                                <div class="col-6 row">
                                    <div class="col-3">
                                    </div>
                                    <div class="col-8 bg-dark d-flex align-items-center justify-content-center" style="height: 85vh" >
                                        <img class="w-100" src="${response.data.sign}" alt="First slide">
                                    </div>
                                </div>
                                <div class="col-6 row">
                                    <div class="col-1">
                                    </div>
                                <div class="col-8">
                                <div class="containera d-flex align-items-center justify-content-center flex-wrap" style="height: 85vh">
                                    <div class="w-100 text-center">
                                        <h1 class="text-light">${response.data.name}</h1>
                                    </div>
                                    <div class="boxa">
                                        <div class="bodya">
                                            <div class="imgContainer"> 
                                                <img src="${response.data.image}" alt=""> </div>
                                            <div class="contenta d-flex flex-column align-items-center justify-content-center">
                                                <div>
                                                    <p class="fs-6 text-white">${response.data.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>`

            /*  '<div class="flex-container">' +
            '<div class="flex-child magenta">' +
            '<img class="imga" src="' + response.data.sign + '" alt="">' +
                '</div>' +

                '<div class="flex-child green">' +
                '<h1 class="titulo fs-12 p-l-25 text-black">' + response.data.name + '</h1>' +
                '<div class="containera d-flex align-items-center justify-content-center flex-wrap">' +
                '<div class="boxa">' +
                '<div class="bodya">' +
                '<div class="imgContainer"> ' +
                '<img src="' + response.data.image + '" alt=""> </div>' +
                '<div class="contenta d-flex flex-column align-items-center justify-content-center">' +
                '<div>' +
                '<p class="fs-6 text-white">' + response.data.description + '</p>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' */
        }
    )
    .catch(
        function (err) {
            document.getElementById('obteniendo').innerHTML =
                '<li class="text-danger">' + err.message + '</li>';
        }
    );