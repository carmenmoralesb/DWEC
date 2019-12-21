var entrada = prompt("Escribe una palabra");
var invertida = ""
var contador = entrada.length;
var auxi = entrada

while (contador != 0) {
    contador -= 1
    auxi += (entrada.charAt(contador))
}

console.log(auxi);