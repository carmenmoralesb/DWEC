var num1 = prompt("Introduce el primer numero");
var num2 = prompt("Introduce el segundo numero");
var num3 = prompt("Introduce el tercer numero");
var num4 = prompt("Introduce el cuarto numero");

// para el operador de adicion es necesario cambiar le tipo de variable
// ya que si no la cambiamos lo que nos saldría seria la concatenacion
// de las variables

var suma = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4)
var producto = num1 * num2 * num3 * num4;

alert("La suma es " + suma + '\n' + 
      "El producto es " + producto ); 