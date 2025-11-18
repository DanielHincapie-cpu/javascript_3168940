const infocomic = document.querySelector('.info-comic');
const cardpersonajes = document.querySelector('.card-personajes');

console.log(infocomic)

infocomic.innerHTML = `
        <small>${comic.year}</small>
        <h1>${comic.nombrecomic}</h1>
        <p>${comic.sinopsis}</p>
        <p>Genero: ${comic.genero}</p>
`


console.log(comic.personajes)

comic.personajes.forEach( char => {
        const div = document.createElement('div');
        div.classList.add("personaje");
        console.log(char);
    document.body.innerHTML += `<img src="${char.imagen}"with="200">`
});