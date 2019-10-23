var nuevoArray = ['ele1', 'ele2', 'ele3', 'ele4']
var longitud = nuevoArray.length;
var ultimo = nuevoArray[longitud - 1];
console.log(ultimo);
console.log(nuevoArray);

for (j = longitud; j > 0; j--) {
    console.log(nuevoArray[j]);
    // j=2
    //Desplazo un indice los elementos  
    nuevoArray[j] = nuevoArray[j - 1]; // <-- array[2] pasa a ser el que era antes array[2-1]    
    // ele4 = ele3
}
//el elemento ultimo es añadido el primero    
nuevoArray[0] = ultimo;
nuevoArray.pop();
console.log(nuevoArray);