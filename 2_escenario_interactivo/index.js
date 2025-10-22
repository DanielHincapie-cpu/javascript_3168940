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