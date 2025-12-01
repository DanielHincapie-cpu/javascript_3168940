import { comic } from "./bd.js";

const params = new window.URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));

//comparar id de URl con id de la base de datos
const miCapitulo = comic.capitulos.find((c) => c.id === id);

//console.log("El capítulo encontrado es:", miCapitulo);
const containerCapitulo = document.querySelector('.contenido-capitulo');
console.log(containerCapitulo);
containerCapitulo.innerHTML = `
       <main class="contenido-cap">
        <section class="hero">
            <div class="featured">
                
                <h2 id="nombre-capitulo">${miCapitulo.nombre}</h2>
                
                <ul class="meta">
                    <li>Año: ${miCapitulo.year}</li>
                    <li>Duración: Aprox 50m</li>
                    <li>Género: ${miCapitulo.genero}</li>  
                </ul>
                
                <p id="descripcion-capitulo">
                    "${miCapitulo.descripcion[0]}"
                    <br><br>
                En este capítulo exploramos ${miCapitulo.descripcion[0].toLowerCase()} de Rodolfo Aicardi, destacando momentos clave y su impacto en la música tropical.
                </p>
                <div class="personal-info">
                    <h3>Detalles del Capítulo</h3>
                    <div class="info-grid">
                        
                        <div class="info-item">
                            <strong>Número de Capítulo:</strong>
                            <span>${miCapitulo.id}</span>
                        </div>
                        
                        <div class="info-item">
                            <strong>Personajes Presentes:</strong>
                            <span>${miCapitulo.personajes}</span>
                        </div>
                        
                        <div class="info-item">
                            <strong>Imagen Representativa:</strong>
                            <span><img src="${miCapitulo.imagen}" alt="Imagen del capítulo ${miCapitulo.id}"></span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </main>
`;