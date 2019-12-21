
var num1 = prompt("Escribe un numero");
var num2 = prompt("Escribe un numero");

// isNaN (valor) evalúa un argumento para determinar si es un número.

if ((isNaN(num1)) || (isNaN(num2))) {
  alert("Introduce dos números por favor");
}

// isNaN intenta convertir el parámetro pasado a un número. 
//Si el parámetro no se puede convertir, devuelve true; en caso contrario, devuelve false.

else {
  var suma = parseInt(num1) + parseInt(num2)
  alert(suma);
}