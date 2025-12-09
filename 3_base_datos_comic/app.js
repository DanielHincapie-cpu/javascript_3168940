import { comic } from './bd.js';

const hero = document.querySelector('.hero');
const rowEpisodios = document.querySelector('.catalog .row:first-child .row-items'); 
const cardpersonajes = document.querySelector('.catalog .row:last-child .row-items'); 

console.log("Hero seleccionado:", hero);
console.log("Contenedor de episodios seleccionado:", rowEpisodios);
console.log("Contenedor de personajes seleccionado:", cardpersonajes);

const fondos = ['bg1', 'bg2', 'bg3'];
let indiceFondo = 0; 

function cambiarFondoAutomatico() {
    fondos.forEach(fondo => {
        hero.classList.remove(fondo);
    });

    hero.classList.add(fondos[indiceFondo]);

    indiceFondo = (indiceFondo + 1) % fondos.length; 
}

cambiarFondoAutomatico();
setInterval(cambiarFondoAutomatico, 5000); 


if (hero && comic) {
    hero.innerHTML = `
        <article class="featured" aria-labelledby="featured-title">
        
            <div class="featured-media">
                <img src="${comic.portadacomic}" alt="Póster biográfico de Rodolfo Aicardi" />
            </div>
            <div class="featured-info">
                <h2 id="featured-title">${comic.nombrecomic}</h2> 
                <p class="overview">En este lugar encontrarás toda la información que necesitas para saber sobre la vida
                    y obra del cantante colombiano Rodolfo Aicardi, el rey de los diciembres.</p>
                <div class="featured-actions">
                    <a href="/watch/123" role="button" class="play-button" aria-label="Reproducir tráiler o documental">Reproducir</a>
                    <a href="/list/add/123" role="button" class="list-button" aria-label="Agregar a mi lista">+ Mi lista</a>
                    <a href="/more/123" class="more-info-button" aria-label="Más información detallada">Más información</a>
                </div>
                <ul class="meta">
                    <li>Capítulos: ${comic.numerocapitulos}</li>
                    <li>Año: ${comic.year}</li>
                    <li>Clasificación: ${comic.genero}</li>
                </ul>
            </div>
        </article>
    `;
}


if (rowEpisodios && comic && comic.capitulos) {
    comic.capitulos.forEach( (cap, index) => {
        const li = document.createElement('li');
        li.classList.add('card');
        li.setAttribute('role', 'listitem');
        li.setAttribute('data-id', `e${cap.id}`); 

        li.innerHTML = `
        <a href="./capitulos.html?id=${cap.id}"> 
            <figure>
                <img src="${cap.imagen}" alt="Poster de Episodio ${cap.id}: ${cap.nombre}" />
                <figcaption>
                    <strong>Capítulo ${cap.id}: ${cap.nombre}</strong>
                    <span class="meta">${comic.year} • Aprox 50m</span>
                </figcaption>
            </figure> </a>
        `;
        
        rowEpisodios.appendChild(li);
    });
}



if (cardpersonajes && comic && comic.personajes) {
    comic.personajes.forEach( char => {
        const li = document.createElement('li');
        li.classList.add('card'); 
        li.setAttribute('role', 'listitem');
        
        li.innerHTML = `
        <a href="./personajes.html?id=${char.id}" </a>
            <figure>
                <img src="${char.imagen}" alt="Imagen del personaje ${char.nombre}">
                <figcaption>
                    <strong>${char.nombre}</strong>
                    <span class="meta">${char.descripcion}</span>
                </figcaption>
            </figure </a>
        `;
        
        cardpersonajes.appendChild(li);
    });
}

if (!id || !miPersonaje) {
    window.location.href = 'index.html';
}