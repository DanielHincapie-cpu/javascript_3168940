
//"configuración ESModules 2611"

import { comic } from './bd.js';

const params = new window.URLSearchParams(window.location.search)
const id = parseInt ( params.get('id') )

//comparar id de URl con id de la base de datos
const miPersonaje = comic.personajes.find( p => p.id === id )

//console.log("El personaje encontrado es:", miPersonaje);
const containerPersonaje = document.querySelector('.contenido-personaje')
console.log(containerPersonaje)
containerPersonaje.innerHTML = `
       <main class="contenido-per">
        <section class="hero">
            <div class="featured">
                
                <h2 id="nombre-personaje">${miPersonaje.nombre}</h2>
                
                <ul class="meta">
                    <li> Medellín</li>
                    <li> 1946 - 2007</li>
                    <li> La Maestranza</li>  
                </ul>
                
                <p id="descripcion-personaje">
                    "Protagonista principal, cuya vida y obra inspiran la narrativa."
                    <br><br>
                si no tiene plata no se preocupe que es gratis y si no tiene quien le cuide los niños, tampoco poeque es para todas las edades.
                </p>


                <div class="personal-info">
                    <h3>Información Personal y Origen</h3>
                    <div class="info-grid">
                        
                        <div class="info-item">
                            <strong>Identidad Real:</strong>
                            <span>Marco Tulio Aicardi Rivera</span>
                        </div>
                        
                        <div class="info-item">
                            <strong>Lugar de Nacimiento:</strong>
                            <span>Medellín 23 de mayo de 1946</span>
                        </div>
                        
                        <div class="info-item">
                            <strong>Ocupación:</strong>
                            <span>Cantante y compositor</span>
                        </div>
                        
                        <div class="info-item">
                            <strong>lugar de su debut:</strong>
                            <span>Medellín con el grupo Sexteto Miramar</span>
                        </div>
                        
                        <div class="info-item">
                            <strong>Afiliación Principal:</strong>
                            <span>Los Hispanos</span>
                        </div>
                        
                        <div class="info-item">
                            <strong>Grandes Exitos</strong>
                            <span>Colegiala, Cariñito, etc.</span>
                        </div>
                        
                        <div class="info-item">
                            <strong>Estatura/Peso:</strong>
                            <span>[1,60m / indefinido kg]</span>
                        </div>

                        <div class="info-item">
                            <strong>Primera Aparición:</strong>
                            <span>Nacimiento de un eco músical</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="catalog">
            
        </section>

<section>
        <img class="imagen-personaje" 
        src="Gemini_Generated_Image_xzoiglxzoiglxzoi.png" alt="Imagen de Rodolfo Aicardi">
</section>

    </main>
    `

