var matrizEjemplo = [
    [1, 2, 3],
    [4, 5 ,6],
    [7, 8, 9]
];

function calmedia(matriz) {
    var suma = 0;
    var longi = matriz.length;
    var media = 0

    for (i = 0; i < longi; i++) {
        for (j=0; j<matriz[0].length;j++) {
        suma += parseInt(matriz[i][j]);
    }
}
    media = suma / (longi*matriz[0].length);
    return media
}

function minimax(matriz) {
    var max = 0
    var min = matriz[0][0]
    var longi = matriz.length;
    var salida = ''

    for (i = 0; i < longi; i++) {
        for (j=0;j<longi;j++ ) {

        if (matriz[i][j] > max) {
            max = matriz[i][j];
        }
    }
}

    for (i = 0; i < longi; i++) {
        for (j=0;j<longi; j++) {
            if (matriz[i][j] < min) {
                min = matriz[i][j];
        }
    }
    }
    salida = 'El maximo es ' + max + ' y el minimo es ' + min
    return salida
}


function sumaDiagDesc(matriz) {
    var sumdiagasc = 0
    for (i = 0; i < 3; i++) {
        // 0 0
        // 1 1

        sumdiagasc += matriz[i][i];
    }
    return sumdiagasc
}

function sumaDiagAsc (matriz) {
    var suma = 0
    for (i = 0; i < 3; i++) {
        //console.log(matrizEjemplo[i][i])

        // primera iteracion
        // matriz[0][3-1-1=1]
        suma += matriz[i][matriz.length - i - 1];
    }
    return suma
}


function NumEncimaDiagAsc (matriz) {
    var encdiagdesc = 0
    for (i = 0; i < 3; i++) {
        for (j=0;j<3;j++) {
        
        if (j>i) {
        encdiagdesc += matriz[i][j]

        }
    }
}
        // primera iteracion
        // matriz[0][3-1-1=1]
    return encdiagdesc
}



function NumDebajoDiagAsc (matriz) {
    var debdiagdesc = 0
    for (i = 0; i < 3; i++) {
        for (j=0;j<3;j++) {
        
        if (j<i) {
        debdiagdesc += matriz[i][j]

        }
    }
}
        // primera iteracion
        // matriz[0][3-1-1=1]
    return debdiagdesc
}

console.log(calmedia(matrizEjemplo));
console.log(minimax(matrizEjemplo));
console.log(sumaDiagDesc(matrizEjemplo));
console.log(sumaDiagAsc(matrizEjemplo));
console.log(NumEncimaDiagAsc(matrizEjemplo));
console.log(NumDebajoDiagAsc(matrizEjemplo));

