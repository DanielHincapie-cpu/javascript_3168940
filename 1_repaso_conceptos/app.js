const boton = document.getElementById("Desenfocar");
const imagen = document.getElementById("miimagen");
const boton2 = document.getElementById("Zoom")
const boton3 = document.getElementById("Rotar")
const boton4 = document.getElementById("BlancoYNegro")

boton.addEventListener("click", () => {
    imagen.classList.toggle("blur");
});

boton2.addEventListener("click", () => {
    imagen.classList.toggle("zoom");
});

boton3.addEventListener("click", () => {
    imagen.classList.toggle("Rotar");
});

boton4.addEventListener("click", () => {
    imagen.classList.toggle("BlancoYNegro");
});