
//"configuración ESModules 2611"

import { comic } from './bd.js';

const params = new window.URLSearchParams(window.location.search)
const id = parseInt ( params.get('id') )

console.log("La id del personaje es", id);