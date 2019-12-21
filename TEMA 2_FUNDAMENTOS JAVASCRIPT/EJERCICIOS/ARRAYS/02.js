var numArray = []
var totalNum = 100
var salida = 'Numeros que no aparecen '

for (i = 0; i <= totalNum; i++) {
    numArray[i] = Math.floor(Math.random() * (100 - 1) + 1)
}

numArray.sort(function (a, b) {
    return a - b
});

// pasamos una función 
//como argumento del método sort() y ya tenemos el array numérico ordenado ascendentemente

for (j = 0; j <= 100; j++) {
    // si no incluye j lo añado a la salida
    if (!numArray.includes(j)) {
        salida += j + '\n'
    }
}

console.log(numArray);
console.log(salida);