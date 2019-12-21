var entrada = prompt("Escribe una cadena")
var salida1 = ""
var salida2 = ""
var salida3 = ""
var salida4 = ""
var longi = entrada.length;
var contador = 0


function mitad() {
    for (i = 0; i < parseInt(longi / 2); i++) {
        salida1 += entrada.charAt(i);
    }
    return salida1
}

function ultimocar() {
    return salida2 = entrada.substr(-1);
    // SI ES NEGATIVO EMPIEZA DESDE EL FINAL
}

function inversa() {
    while (longi != 0) {
        longi -= 1
        salida3 += (entrada.charAt(longi));
        //console.log(contador);
    }
    return salida3
}

function guiones() {
    var auxi = ''
    for (i = 0; i < longi; i++) {
        auxi = (entrada.charAt(i) + '-');

        if (i == longi - 1) {
            auxi = (entrada.charAt(i) + ' ');
        } // tenemos que restar 1 a longi para que no nos salga un guion en la ultima letra

        salida4 += auxi
    }
    return salida4
}

function vocales() {
    var numvoc = 0
    var salida = ""
    var vocales = 'AaeEiIoOuU'

    for (i = 0; i < entrada.length; i++) {
        for (j = 0; j < vocales.length; j++) {
            if (entrada.charAt(i) == vocales.charAt(j)) {
                numvoc++;
                //for (i = 0; i < longi; i++) {
                //    if (entrada.charAt(i) == 'A' || entrada.charAt(i) == 'a' || entrada.charAt(i) == 'E' || entrada.charAt(i) == 'e' || entrada.charAt(i) == 'I' || entrada.charAt(i) == 'i' || entrada.charAt(i) == 'o' || entrada.charAt(i) == 'O' || entrada.charAt(i) == 'U' || entrada.charAt(i) == 'u') {
                //        numvoc ++
                //    }
            }
        }
    }

    salida = 'La palabra tiene ' + numvoc + ' vocales'
    return salida
}

console.log(mitad());
console.log(ultimocar());
console.log(inversa());
console.log(guiones());
console.log(vocales());