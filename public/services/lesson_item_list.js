var full_url = document.URL; // Get current url
var url_array = full_url.split('=') // Split the string into an array with / as separator
var last_segment = url_array[url_array.length-1];  // Get the last part of the array (-1)
// alert( last_segment ); // Alert last segment
// alert(api+'signs/getAll?id='+last_segment);
const container = document.getElementById('obteniendo');
var lista;
var data;
var actual;

axios.get(api+'lesson/lessonsign/get',{ params: { lesson: last_segment } })
      .then( (response) => {
          console.log(response.data);
          data = response.data
          var iteration = 0
          lista = 
          data.map( (item) =>
          {
            return (        
            '<div class="grid-item">'+
              '<div class="card" style="width: 20rem; height: 20rem">'+
                '<a class="contenedor" onclick="selectTarget('+iteration++ +')"><img class="card-img-top" src="'+
                ((item.type == 2)? '../images/play.png':item.sign.image)+'" alt="Card image cap"/>'
                  +'<div class="centrado">'
                    +'<h5>'+((item.sign.name.length <= 2)?"":item.sign.name)+'</h5>'
                  +'</div></a></div>'
            +'</div>'
            );
          }).join('');
          container.innerHTML = lista;
        })
        .catch( (err) => {
          container.innerHTML = '<li class="text-danger">' + err.message + '</li>';
        });

        function selectTarget(flag) {
          actual = flag;
          console.log(flag, 'to reder');
          console.log('lista', data);
          if (data[flag].type == 1) {
            rederSign(flag);
          } else if (data[flag].type == 2) {
            rederMovie(flag);
          }
          
        }

        function navegacion() {
          return (
            ''
          )
        }

        function rederSign(flag){
          const element = data[flag].sign;
          container.innerHTML =
                '<div class="flex-container">'+
                    '<div class="flex-child magenta">'+
                        '<img class="imga" src="'+element.sign+'" alt="">'+
                    '</div>'+
                '<div class="flex-child green">'+
                '<h1 class="titulo fs-12 p-l-25 text-black">'+element.name+'</h1>'+
                    '<div class="containera d-flex align-items-center justify-content-center flex-wrap">'+
                        '<div class="boxa">'+
                            '<div class="bodya">'+
                                '<div class="imgContainer"> '+
                                '<img src="'+element.image+'" alt=""> </div>'+
                                    '<div class="contenta d-flex flex-column align-items-center justify-content-center">'+
                                        '<div>'+
                                            '<p class="fs-6 text-white">'+element.description+'</p>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'
        }

        function rederMovie(flag){
          const element = data[flag].sign;
          container.innerHTML =
                '<div class="flex-container">'+
                    '<div class="flex-child magenta">'+
                        '<img class="imga" src="'+element.sign+'" alt="">'+
                    '</div>'+
                '<div class="flex-child green">'+
                '<h1 class="titulo fs-12 p-l-25 text-black">'+element.name+'</h1>'+
                    '<div class="containera d-flex align-items-center justify-content-center flex-wrap">'+
                        '<div class="boxa">'+
                            '<div class="bodya">'+
                                '<div class="imgContainer"> '+
                                '<img src="'+element.image+'" alt=""> </div>'+
                                    '<div class="contenta d-flex flex-column align-items-center justify-content-center">'+
                                        '<div>'+
                                            '<p class="fs-6 text-white">'+element.description+'</p>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'
        }

