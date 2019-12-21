var entrada = toLoweprompt("Escribe una palabra");
var invertida = ""
var contador = entrada.length; // el contador es la longitud de la palabra
var palindromo = false
var salida = ''

while (contador != 0) {
    contador -= 1
    invertida += (entrada.charAt(contador))

    //console.log(contador);
}

if (invertida==entrada) {
    palindromo = true
    salida = 'Es un palíndromo'
}

else {
    salida = 'No es palíndromo'
}

console.log(salida);

