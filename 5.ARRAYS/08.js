var numfilas = prompt("Di un numero de filas");
var eleporfila = prompt("Di el numero de celdas");
var nuevamatriz = []
var salida = ''

for (i = 0; i < numfilas; i++) {
    nuevamatriz[i] = []
    for (j = 0; j < eleporfila; j++) {
        nuevamatriz[i][j] = i + j
    }

}

for (i = 0; i < numfilas; i++) {
    console.log(nuevamatriz[i] + '\n')
}