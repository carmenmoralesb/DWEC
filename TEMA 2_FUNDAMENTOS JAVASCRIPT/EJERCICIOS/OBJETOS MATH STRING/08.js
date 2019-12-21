var entrada1 = prompt("Escribe una frase o palabra");
var entrada2 = prompt("Escribe un caracter para borrar");

var regex = new RegExp(entrada2,'g');

// creo un nuvo objeto de tipo expresión regular que tenga entrada2 que es el texto a buscar y con la flag /g
// con la cual hace busqueda global (todas las coincidencias)

var salida = ''

salida = entrada1.replace(regex, '');

console.log(salida);