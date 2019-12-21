function sumar (x) {
    // array = [1,2,3,4,5]
    return x+3;
}

function funcionArray (funcion,array) {
  var nuevoarray=[]
   for (i=0;i<array.length;i++) {
       console.log(array[i])
       nuevoarray.push(funcion(array[i]))
   }
   for (i=0;i<nuevoarray.length;i++) {
       console.log(nuevoarray[i] + " ");
   }
}