var filas = prompt("Numero de filas");
var col = prompt("Numero de columnas");
var nuevamatriz = []

for (i = 0; i < filas; i++) {
    nuevamatriz[i] = []
    for (j = 0; j < col; j++) {
        nuevamatriz[i][j] = Math.floor(Math.random() * 6) + 1 
    }
}

var auxiliar = nuevamatriz;
console.log(auxiliar);


var indice1 = prompt("Indice i");
var indice2 = prompt("Indice j");

for (i = 0; i < filas; i++) {
    for (j = 0; j < col; j++) {
        if (i==indice1) {    
            delete nuevamatriz[i][j];
        }
        delete nuevamatriz[i][indice2];
        }
}

console.log(nuevamatriz);
