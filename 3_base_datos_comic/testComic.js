const infocomic = document.querySelector('.info-comic');
const cardpersonajes = document.querySelector('.card-personajes');

console.log(infocomic)

infocomic.innerHTML = `
        <h1>${comic.nombrecomic}</h1>
        <small>${comic.year}</small>
        <p>${comic.sinopsis}</p>
        <p>Genero: ${comic.genero}</p>
`


console.log(comic.personajes)

comic.personajes.forEach( char => {
        const div = document.createElement('div');
        div.classList.add("personaje");
        div.innerHTML = `
            <img src="${char.imagen}" alt="personaje1">
            <h3>${char.nombre}</h3>
            <p> ${char.descripcion}</p>;`

            cardpersonajes.appendChild(div);
});