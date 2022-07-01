var map = L.map('map-template').setView([13.682016250227068, -89.23600174602457], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


var myIcon = L.divIcon({className: 'my-div-icon'});

// you can set .my-div-icon styles in CSS
//L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);

//Marker de la UCA
L.marker(
    [13.682016250227068, -89.23600174602457],{
        title: 'Esta es la UCA'
    })
    .addTo(map).bindPopup('Universidad Jose Simeon')
    .openPopup(); 

L.marker([13.708225, -89.209376],{title: 'EnSeñas El Salvador'}).addTo(map).bindPopup('EnSeñas El Salvador.<br> Escuela de lenguaje de señas.');
L.marker([13.997058, -89.558488],{title: 'ESCUELA PARA SORDOS'}).addTo(map).bindPopup('ESCUELA PARA SORDOS.<br> Escuela de lenguaje de señas.');
L.marker([13.673169, -89.232727],{title: 'Academia de Lengua de Señas "Manos que hablan"'}).addTo(map).bindPopup('Academia "Manos que hablan".<br> Escuela de lenguaje de señas..');
L.marker([13.717137, -89.208091],{title: 'Escuela Cristiana para Sordos'}).addTo(map).bindPopup('Escuela Cristiana para Sordos.<br> Escuela de lenguaje de señas.');
L.marker([13.721601, -89.928391],{title: 'Centro Escolar Para Sordos'}).addTo(map).bindPopup('Centro Escolar Para Sordos.<br> Escuela de lenguaje de señas.');