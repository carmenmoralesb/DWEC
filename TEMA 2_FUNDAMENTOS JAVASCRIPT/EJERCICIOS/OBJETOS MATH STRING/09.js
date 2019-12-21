var entrada1 = prompt("Cuantos numeros quieres");
contador1 = 0
contador2 = 0
var salida1 = ''
var salida2 = ''

while (contador1<entrada1) {
    salida1 += Math.floor(Math.random() * (100 - 1) + 1) + " "
    contador1 ++
}

while (contador2<entrada1) {
    // devolver numero entre min y max min incluido
    // Math() * (max - min) + min
    salida2 += (Math.random()*(50 - 15)+50).toFixed(2) + " "
    // The toFixed() method converts a number into a string, keeping a specified number of decimals.
    contador2 ++
}

console.log("Números random del 1 al 100 sin decimales " + salida1);
console.log("Números random del 15-20 con 2 decimales " + salida2);