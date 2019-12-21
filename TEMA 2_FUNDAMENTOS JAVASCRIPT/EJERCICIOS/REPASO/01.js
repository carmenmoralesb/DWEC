var vector1 = [1,2,3,4,5,6]
var vector2 = [1,3,3,5,6,8]
var contador = 0

if (vector1.length != vector2.length) {
    console.log("No son mtrices de igual tamaño");
}
else {
    for (i=0;i<vector1.length;i++) {
        if (vector1[i] <= vector2[i]) {
            contador ++;
        } 
    }
    if (contador==vector1.length) {
        console.log("Para todo elemento de vector1 es menor o igual que cada elemento de vector2");
    }
    else {
        console.log("No");
    }
}