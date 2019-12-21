var palabras = ""
var total = 0

while (true) {
    var entrada = prompt("Escribe algo")

    // si entrada es distinta de fin y FIN
    if ((entrada != 'fin') && (entrada != 'FIN')) {
        palabras += entrada
        total += entrada.length;
    }

    else {
        break
    }
}

console.log(total);