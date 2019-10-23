var numArray = []
var max = 10

var actual = null
//actual vale null al principio
var contador = 0

for (i = 0; i <= max; i++) {
    numArray[i] = Math.floor(Math.random() * (max - 1) + 1)
}

var longi = numArray.length;
numArray.sort();
console.log(numArray);

for (i = 0; i < longi; i++) {
    // por cada elemento de numarray si no es igual a actual
    if (numArray[i] != actual) {
        if (contador > 0) {
            console.log(actual + " " + '*'.repeat(contador) + "  ");
        }
        actual = numArray[i]; // actual es el elemento del array por el que se itera
        contador = 1; // inicializo a 1 el contador
    } else {
        contador++; // si el elemento actual es igual que array[i] añado al contador
    }
}

if (contador > 0) {
    console.log(actual + " " + '*'.repeat(contador) + "  ");
}