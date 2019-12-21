var entrada = prompt("Escribe algo");
var array = entrada.split(" ")
var numcarac = 0

for (i=0;i<array.length;i++) {
    numcarac += array[i].length;
}

var primera = array[0]
var ultima = array[array.length-1]
var ordenar = array.sort();


var salida1 = 'El numero de caracteres es ' + numcarac;
var salida2 = 'La primera palabra es ' + primera;
var salida3 = 'La ultima palabra es ' + ultima;
var salida4 = 'El array ordenado es ' + ordenar

console.log(salida1)
console.log(salida2)
console.log(salida3)
console.log(salida4)