var full_url = document.URL; // Get current url
var url_array = full_url.split('=') // Split the string into an array with / as separator
var last_segment = url_array[url_array.length - 1]; // Get the last part of the array (-1)
// alert( last_segment ); // Alert last segment
// alert(api+'signs/getAll?id='+last_segment);
const container = document.getElementById('obteniendo');
var lista;
var data;
var actual;
var test;
var puntaje = 0;
var question_element = document.createElement('div');
var respuesta;

function getEvaluation() {
  axios.get(api + 'test/test/get', {
      params: {
        id: last_segment
      }
    })
    .then((response) => {
      test = response.data[0]
      console.log('test get', test);
      getItems()
    })
    .catch((err) => {
      test = null;
    });

}

function rederSign(flag) {
  question_element = data[flag].question;
  console.log("render sign");
  let verdadero = getRandomInt(0, 2) == 1 ? true : false;
  if (verdadero) {
    respuesta = actual;
  } else {
    respuesta = getRandomInt(0, data.length) - 1;
  }
  respuesaItem = data[respuesta].question;
  //agregar botones verdadero flaso y llamar myRespuesta con res= 1 verdadero, 0 falso
  console.log('es verdadero?: ', verdadero);
  console.log('repsuesta item', respuesaItem);
  console.log('pregunta item', question_element);
  container.innerHTML =
    `<div id="carouselExampleIndicators" class="carousel slide w-100 h-100 mt-3 bg-dark" data-ride="carousel">
        <div class="carousel-inner h-100">
          <div class="carousel-item active h-100">
            <div class="w-100 h-100">
              <div class="row ">
                <div class="w-100 text-center col-12">
                  <h3 class="text-light mt-2">pregunta: ${actual + 1}/${data.length}</h3>
                </div>
                <div class="col-6 row">
                  <div class="col-2">
                  </div>
                  <div class="col-9 bg-dark d-flex align-items-center justify-content-center" style="height: 75vh" >
                    <img class="w-100 h-75" src="${question_element.sign.sign}" alt="First slide">
                  </div>
                  </div>
                  <div class="col-6 row">
                    <div class="col-2"></div>
                    <div class="col-9">
                      <br>
                      <br>
                      <h5 class="text-white text-center">La seña corresponde a esta palabra: ${respuesaItem.sign.name}</h5>
                      <div class="imgContainer text-center"> 
                        <img src="${respuesaItem.sign.image}" alt="" style="width: 40%"> 
                      </div>
                      <br>
                      <div class="w-100"> 
                        <button type="button" class="btn btn-success w-100 mt-3" onclick="myRespuesta(1)">Verdadero</button> 
                      </div>
                      <div class="w-100"> 
                        <button type="button" class="btn btn-danger w-100 mt-3" onclick="myRespuesta(2)">Falso</button> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`
  /*  container.innerHTML =

  <div class="containera d-flex align-items-center justify-content-center flex-wrap" style="height: 75vh">
                          <div class="boxa">
                              <div class="bodya">
                                  <div class="imgContainer"> 
                                    <img src="${respuesaItem.sign.image}" alt=""> </div>
                                      <div class="contenta d-flex flex-column align-items-center justify-content-center">
                                          <div>
                                              <p class="fs-6 text-white">${respuesaItem.sign.name}</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        </div>
                        
          '<div class="flex-container">'+
              '<div class="flex-child magenta">'+
                  '<img class="imga" src="'+ question_element.sign.sign + '" alt="">'+
              '</div>'+
          '<div class="flex-child green">'+ navegacion() +
          '<h1 class="titulo fs-12 p-l-25 text-black"> pregunta: '+(actual + 1)+'/'+ data.length +'</h1>'+
              '<div class="containera d-flex align-items-center justify-content-center flex-wrap">'+
                  '<div class="boxa">'+
                      '<div class="bodya">'+
                          '<div class="imgContainer"> '+
                          '<img src="'+respuesaItem.sign.image+'" alt=""> </div>'+
                              '<div class="contenta d-flex flex-column align-items-center justify-content-center">'+
                                  '<div>'+
                                      '<p class="fs-6 text-white">'+respuesaItem.sign.name+'</p>'+
                                  '</div>'+
                              '</div>'+
                          '</div>'+
                      '</div>'+
                  '</div>'+
                  '<div class="container_button"> <button onclick="myRespuesta(1)">Verdadero</button> <button onclick="myRespuesta(2)">Falso</button> </div>'+
              '</div>'+
          '</div>'
       */


}

function myRespuesta(res) {
  if (test.category.category == 1) { //verdadero o falso
    if (res == 1) { //verdadero
      if (actual == respuesta) {
        puntaje++;
      }
    } else {
      if (actual != respuesta) {
        puntaje++;
      }
    }

  } else if (test.category.category == 2) { //opcion multiple
    if (actual == respuesta) {
      puntaje++;
    }
  }
  if (actual + 1 >= data.length) {
    showResult()
  } else {
    goNextItem();
  }
  console.log('mi puntuacion', puntaje);
  //siguiente pregunta :v
}


function showResult() {
  console.log('calificacion', puntaje * 10 / data.length);
  if((puntaje * 10 / data.length)>=6){
    container.innerHTML =
  `<div id="carouselExampleIndicators" class="carousel slide w-100 h-100 mt-3 bg-dark" data-ride="carousel">
      <div class="carousel-inner h-100">
        <div class="carousel-item active h-100">
          <div class="w-100 h-100">
            <div class="row ">
              <div class="w-100 text-center col-12">
                <h3 class="text-light mt-2">Resultados</h3>
              </div>
              <div class="col-6 row">
                <div class="col-4">
                </div>
                <div class="col-11 p-5">
                  <canvas id="myChart4"></canvas>
                </div>
                <div class="col-4">
                </div>
                </div>
                <div class="col-6 row">
                  <div class="col-5"></div>
                  <div class="col-11">
                  <h3 class="text-light mt-2">Has aprobado la evaluacion</h3>
                  <div class="imgContainer text-center"> 
                  <img src="https://media.istockphoto.com/photos/silhouette-of-a-man-holding-a-trophy-at-sunset-picture-id1202740292?k=20&m=1202740292&s=612x612&w=0&h=NEvKyErDCYIgK6-Ne9yxO-YvcCRaDqFtvpV7IE6TZig=" alt="" style="width: 60%"> 
                  </div>
                  <h3 class="text-light mt-2">Tu calificacion es :</h3>
                  <h3 class="text-light mt-2">${puntaje * 10 / data.length}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>`
  }else{
    container.innerHTML =
  `<div id="carouselExampleIndicators" class="carousel slide w-100 h-100 mt-3 bg-dark" data-ride="carousel">
      <div class="carousel-inner h-100">
        <div class="carousel-item active h-100">
          <div class="w-100 h-100">
            <div class="row ">
              <div class="w-100 text-center col-12">
                <h3 class="text-light mt-2">Resultados</h3>
              </div>
              <div class="col-6 row">
                <div class="col-4">
                </div>
                <div class="col-11 p-5">
                  <canvas id="myChart4"></canvas>
                </div>
                <div class="col-4">
                </div>
                </div>
                <div class="col-6 row">
                  <div class="col-5"></div>
                  <div class="col-11">
                  <h3 class="text-light mt-2">Has fallado la evaluacion</h3>
                  <div class="imgContainer text-center"> 
                  <img src="https://play-lh.googleusercontent.com/LLWrCaH2ii4D_zaqNWYM6CihD3J5EOcE_ZuCfAoIzk5BDVBm4x2flKqN28JaJECPRR4" alt="" style="width: 60%"> 
                  </div>
                  <h3 class="text-light mt-2">Tu calificacion es :</h3>
                  <h3 class="text-light mt-2">${puntaje * 10 / data.length}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>`
  }
          const ctx3 = document.getElementById('myChart4').getContext('2d');
          const myChart4= new Chart
          (ctx3,{
            type: 'doughnut',
            data: 
            {
            labels: [
              'Exito',//Red
              'Fallo'
              ],
              datasets: [{
                label: 'Resultados',
                data: [puntaje, data.length-puntaje],
                backgroundColor: [
                  'rgb(0, 143, 57)',
                  'rgb(255, 0, 0)'
                ],
                hoverOffset: 4
              }]
            }
            ,
    
            options: 
            {         
              scale: {
                ticks: {
                  min: 0,
                  max: 10,
                  max: 10,
                  stepSize: 1,
                  beginAtZero: true
                },
                pointLabels: { fontSize:10 }
              }
              ,
              plugins: {
                legend: {
                  labels: {
                    // This more specific font property overrides the global property
                    font: {
                      size: 12
                    }}
                }
    
              } 
            }
    
          });
}

function getItems() {
  axios.get(api + 'test/testxquestion/getByTest', {
      params: {
        test: last_segment
      }
    })
    .then((response) => {
      console.log('test list', response.data);
      data = response.data
      selectTarget(0);
      actual = 0;
    })
    .catch((err) => {
      container.innerHTML = '<li class="text-danger">' + err.message + '</li>';
    });
}

function selectTarget(flag) {
  actual = flag;
  console.log(flag, 'to reder');
  console.log('lista', test);
  if (test.category.category == 1) {
    rederSign(flag);
  } else if (test.category.category == 2) {
    rederMovie(flag);
  }

}

function goHome() {
  container.innerHTML = lista;
}

function goBackItem() {
  console.log('back');
  if(actual >= 1)
    selectTarget(actual - 1);
}

function goNextItem() {
  console.log('next');
  if(actual < data.length - 1)
    selectTarget(actual + 1);
}

function navegacion() {
  var inicio = '<div class="section-navigation mdl-bottom"> <span class="mdl-left">'
  if (actual != 0) {
    inicio += '<a onclick="goBackItem()">' +
      '<span class="larrow"><ion-icon name="caret-back-outline"></ion-icon></span> Atrás </a>'
  }
  inicio += ' </span> <span class="close"> <a onclick="goHome()">' +
    '<span class="xclose"><ion-icon class="iclose" name="close-circle-outline"></ion-icon></span>' +
    '</a> </span> <span class="mdl-right">'
  if (actual < data.length - 1) {
    inicio += '<a onclick="goNextItem()"> Siguiente <span class="rarrow"><ion-icon name="caret-forward-outline"></ion-icon></span> </a>'
  }
  inicio += ' </span></div>'
  return inicio
}


function getRandomIntNotRepeat(list, m, n) {
  let flag;
  while (true) {
    let res = getRandomInt(m, n);
    flag = true;
    list.forEach(e => {
      if (e == res) {
        flag = false;
      }
    });
    if (flag) {
      return res;
    }
    console.log("ramdom", res, "m", m, 'n', n);

  }

}

function rederMovie(flag) {
  let opciones = []
  let opcionVerdaderaFlag = true;
  question_element = data[flag].question;
  for (let i = 0; i < 4 && i < data.length; i++) {
    if (opcionVerdaderaFlag && i == 3) {
      opciones.push(actual);
      break;
    }
    if (opcionVerdaderaFlag) {
      let verdadero = getRandomInt(0, 2) == 1 ? true : false;
      if (verdadero) { //guardar respuesta correcta
        opciones.push(actual);
        opcionVerdaderaFlag = false;
      } else {
        let res = getRandomIntNotRepeat(opciones, 0, data.length);
        if (res == actual) { //random guarda respeusta correcta
          opcionVerdaderaFlag = false;
        }
        opciones.push(res);
      }
    } else {
      let res = getRandomIntNotRepeat(opciones, 0, data.length);
      if (res == actual) { //random guarda respeusta correcta
        opcionVerdaderaFlag = false;
      }
      opciones.push(res);
    }
  }

  console.log('opciones', opciones);
  console.log('element', question_element);

  container.innerHTML =
  `<div id="carouselExampleIndicators" class="carousel slide w-100 h-100 mt-3 bg-dark" data-ride="carousel">
    <div class="carousel-inner h-100">
      <div class="carousel-item active h-100">
        <a class="carousel-control-next" id="nextbtn" onclick="myRespuesta(1)"  style="display: none" role="button" data-slide="next">
          <span class="sr-only">Aceptar</span>
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      <div class="w-100 h-100">
        <div class="row ">
          <div class="w-100 text-center col-12">
            <h3 class="text-light mt-2">pregunta: ${actual + 1}/${data.length}</h3>
          </div>
          <div class="col-6 row">
            <div class="col-2">
            </div>
            <div class="col-9 bg-dark d-flex align-items-center justify-content-center" style="height: 75vh" >
              <img class="w-100 h-75" src="${question_element.sign.sign}" alt="First slide">
            </div>
            </div>
            <div class="col-6 row">
              <div class="col-1"></div>
              <div class="col-8">
                <br>
                <br>
                <h5 class="text-white text-center">Elige la respuesta correcta</h5>
                <div class="imgContainer text-center" style="height: 30%"> 
                  <img src="/images/question.png" alt="" style="width: 40%" id="container_item_image"> 
                </div>
                <br>
                <div id="container_button" class="w-100">  </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
      
    /* '<div class="flex-container">' +
    '<div class="flex-child magenta">' +
    '<img class="imga" src="' + question_element.sign.sign + '" alt="">' +
    '</div>' +
    '<div class="flex-child green">' + navegacion() +
    '<h1 class="titulo fs-12 p-l-25 text-black"> pregunta: ' + (actual + 1) + '/' + data.length + '</h1>' +
    '<div class="containera d-flex align-items-center justify-content-center flex-wrap">' +
    '<div class="boxa">' +
    '<div class="bodya">' +
    '<div class="imgContainer"> ' +
    '<img src="' + "/images/question.png" + '" alt="" id="container_item_image"> </div>' +
    '<div class="contenta d-flex flex-column align-items-center justify-content-center">' +
    '<div>' +
    '<p class="fs-6 text-white" id="container_item_description">' + "?" + '</p>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div id="container_button">  </div>' +
    '<div id="container_button_save" onclick="myRespuesta(1)">  Siguiente </div>' +
    '</div>' +
    '</div>' */

  let buttonsoptions = document.getElementById('container_button');
  buttonsoptions.innerHTML =
    opciones.map((the_button) => {
      return (
        `<button class="btn btn-success w-100 mt-3" onclick="myRespuestaOption(${the_button})">${data[the_button].question.sign.name}</button>`
      );
    }).join('');

}

function myRespuestaOption(flag) {
  /* let item_name = document.getElementById('container_item_description'); // obtener imagen y nombre para cambiar
  console.log("item_name", item_name); */
  //item_name.textContent = data[flag].question.sign.name
  let next = document.getElementById("nextbtn");
  let item_image = document.getElementById('container_item_image'); // obtener imagen y nombre para cambiar
  item_image.src = data[flag].question.sign.image
  next.style.display = '';
  respuesta = flag;
}



getEvaluation();

function getRandomInt(min, max) { // [min, max[
  //console.log(Math.floor(Math.random() * (max - min)) + min);
  return Math.floor(Math.random() * (max - min)) + min;
}
