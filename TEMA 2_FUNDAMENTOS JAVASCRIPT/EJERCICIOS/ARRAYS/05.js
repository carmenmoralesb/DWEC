var matriz1 = [
    [0, 1, 2],
    [3, 4, 5]
];

var matriz2 = [
    [0, 1, 2],
    [3, 4 ,5]
];

var summatriz = [];

for(i=0; i < matriz1.length; i++) {
    summatriz[i] = [] 
    for (j=0;j<matriz2[0].length;j++) {
        summatriz[i][j] = matriz1[i][j]+matriz2[i][j];
}
}


for (i = 0; i < summatriz.length; i++) {
    console.log(summatriz[i] + '\n')
}