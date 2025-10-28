// escenario 1
const jell = document.querySelectorAll('.jellyfish');
const score = document.querySelector('.score');
const Reiniciar = document.querySelector('.reset');

let counter = 0


console.log(jell, score)

jell.forEach( item => {


    item.addEventListener('click', () => {
    item.style.filter = "grayscale(1)"
    item.classList.add('salto')
    counter++
    score.textContent = `Score: ${counter}`
})

 });

reset.addEventListener('click', () => { 
    counter = 0
    score.textContent = `Puntos: ${counter}` 
     });
    
//  escenario 2
const content = document.querySelectorAll('.content');
const Puntaje = document.querySelector('.Puntaje');
const Resetear = document.querySelector('.Resetear'); 

let contador = 0 


console.log(content, Puntaje)

content.forEach( item => {


    item.addEventListener('click', () => {
    item.style.filter = "grayscale(1)"
    item.classList.add('saltar')
    contador++
    Puntaje.textContent = `Puntaje: ${contador}`
})

 });
 
Resetear.addEventListener('click', () => {
    contador = 0
    Puntaje.textContent = `Reiniciar: ${contador}` 
     });



// escenario 3
const lang = document.querySelectorAll('.lang');
const Points = document.querySelector('.Points');
const Reempezar = document.querySelector('.Reempezar');

let count = 0

console.log(lang, Points)

lang.forEach( item => {

    item.addEventListener('click', () => {
    item.style.filter = "grayscale(1)"
    item.classList.add('saltar')
    count++
    Points.textContent = `Points: ${count}`
})

 });

Reempezar.addEventListener('click', () => { 
    count = 0
    Points.textContent = `Reempezar: ${count}` 
     });
// carrusel de escenas

//varibales
const escenas = document.querySelectorAll('.escena');
const btnSiguiente = document.querySelector('.btn-siguiente');
const btnAnterior = document.querySelector('.btn-anterior');
const miniaturas = document.querySelectorAll('.miniatura');
let indice = 0 

console.log(escenas, btnSiguiente, btnAnterior, miniaturas);

//funciones
function mostrarEscena (i) {
    for (let j = 0; j < escenas.length; j++) {
        escenas[j].classList.remove('activa');
        
    }
    escenas[i].classList.add('activa');

    indice = i;

};

btnAnterior.addEventListener('click', function() {
    indice = indice -1        
    if (indice < 0) {
        indice = escenas.length -1;
    }
    mostrarEscena(indice);
});

btnSiguiente.addEventListener('click', function() { 
    indice = indice +1        
    if (indice >= escenas.length) {
        indice = 0;
    }
    mostrarEscena(indice);
});