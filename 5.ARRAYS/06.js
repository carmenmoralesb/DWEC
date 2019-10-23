var matriz = [
    [2, 4, 6, 8],
    [6, 4, 2, 9],
    [6, 4, 2, 3],
    [1, 2, 1, 2],
];

var sumdiagasc = 0
var longiarray = matriz.length;
var sumdiagdesc = 0

for (i = 0; i < longiarray; i++) {
    // 4 - i = 1 - 1
    sumdiagasc += matriz[i][matriz.length - i - 1];
    sumdiagdesc += matriz[i][i];

    }
    
console.log('La suma ascendente es ' + sumdiagasc);
console.log('La suma descendente es ' + sumdiagdesc);