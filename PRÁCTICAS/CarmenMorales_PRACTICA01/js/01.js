function acarreo() {

var numero1 = parseInt(document.getElementById("numero1").value);
var numero2 = parseInt(document.getElementById("numero2").value);
var salida = ""
var numacarreos = 0

/* 

1. Mientras que numero1 sea mayor que cero y numero2 sea mayor que cero
2. Voy añadiendo el modulo de ambos a dos variables digito ya que tengo que ver el acarreo separando las unidades
3. Voy quitando los numeros mientras separo los digitos con la división entera entre 10
4. Sumo el valor que hay en digito y si es mayor de 10 significa que hay un acarreo
5. Voy almacenando el numero de veces que digito1 + digito2 es mayor que 10 para contar los acarreos

*/

while (numero1 > 0 && numero2 > 0) {
    digito1 = numero1 % 10
    digito2 = numero2 % 10


    numero1 = parseInt(numero1 / 10)
    numero2 = parseInt(numero2 / 10)

    if (digito1 + digito2 >= 10) {
        numacarreos += 1;
    }
salida = "El número de acarreos es " + numacarreos
}
document.getElementById('res1').value = salida;
return false;
}



