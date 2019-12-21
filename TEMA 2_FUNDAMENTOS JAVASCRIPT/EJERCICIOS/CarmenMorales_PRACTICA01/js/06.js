function facprimos(){

    var numero = parseInt(document.getElementById("numfacto").value);
    var divisor=2
    var salida = ""

/* En esta actividad he considerado poner una variable con un valor
   predeterminado al principio, que es el factor primo más pequeño (el 2). 
   
   1. Miro los numeros desde el valor i (que comienza por 2) hasta el numero que ha dado el usuario,y le voy incrementando i
   2. Mientras que el resto sea cero
   3. Le concateno a la salida el valor i y un espacio
   4. Numero va cambiando de valor ya que le divido el divisor

   Ejemplo: numero = 12

   12 es divisible entre 2 = 6
   6 es divisible entre 2 = 3
   3 NO ES divisible entre 2, sumo 1 al valor divisor
   3 si es divisible, 3/3 = 1 NO PUEDO DIVISIR MÁS

   por tanto el resultado sería 2*2*3

   */

for (i = divisor; i <= numero; i++) {
    while (numero % i == 0) {
        salida += i + " "
        numero = parseInt(numero / i)
    }
}
document.getElementById('res6').value = salida;
return false;
}