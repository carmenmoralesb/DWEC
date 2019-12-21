var filas = prompt("Numero de filas");
var col = prompt("Numero de columnas");
var nuevamatriz = []
var contador = 0

for (i = 0; i < filas; i++) {
    nuevamatriz[i] = []
    for (j = 0; j < col; j++) {
        nuevamatriz[i][j] = Math.floor(Math.random() * 3)
    }
}

for (i=0;i<filas;i++) {
    if (nuevamatriz[i].indexOf(0) != -1) {
        contador++;
    }
}

console.log(nuevamatriz);

if (contador==filas) {
    console.log("Es dispersa");
}

else {
    console.log("No es dispersa");
}