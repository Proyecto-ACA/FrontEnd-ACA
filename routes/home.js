var express = require('express');
var router = express.Router();

const palabras=[
    {nombre: 'gato'},
    {nombre: 'pluton'},
    {nombre: 'arbol'},
    {nombre: 'piedra'}
]

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

const buscar =()=>{
    //console.log(formulario.value);

    resultado.innerHTML='';
    const texto = formulario.value.toLowerCase();
    for(let palabra of palabras){
        let nombre= palabra.nombre.toLocaleLowerCase();
        if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `
            <li>${producto.nombre}</li>
            `
        }
    }
}

boton.addEventListener('click',buscar)
//formulario.addEventListener('keyup',buscar)

//buscar();


module.exports = router;