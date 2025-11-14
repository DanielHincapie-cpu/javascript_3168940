const infocomic = document.querySelector('.info-comic');

console.log(infocomic)

infocomic.innerHTML = `
        <small>${comic.year}</small>
        <h1>${comic.nombrecomic}</h1>
        <p>${comic.sinopsis}</p>
        <p>Genero: ${comic.genero}</p>
`