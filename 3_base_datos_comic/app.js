const hero = document.querySelector('.hero');

console.log(hero)

hero.innerHTML = `
    <article class="featured" aria-labelledby="featured-title">
                <div class="featured-media">
                    <img src="portada.png" alt="Póster biográfico de Rodolfo Aicardi" />
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
                        <li>Capitulos: 3</li>
                        <li>Año: ${comic.year}</li>
                        <li>Clasificación: ${comic.genero}</li>
                    </ul>
                </div>
            </article>

`