var entrada = prompt("Introduce una palabra")
var despl = prompt("Introduce desplazamiento")

var abeced = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var longi = entrada.length;

// el maximo indice del abecedario 
var maximpos = abeced.length;
var salida = ''

function ascicodificacion() {
    // paso la entrada a mayusculas para no tener problemas de conversión
    entrada = entrada.toUpperCase();

    for (i = 0; i < longi; i++) {
        caracter = entrada.charAt(i)
        // lo paso a mayusculas para que no haya problemas de coincidencias
        pos = abeced.indexOf(caracter)
        // busco el indice del caracter que estara en una posicion x
        //console.log(entrada)

        if (pos > -1) {
            pos = parseInt(pos) + parseInt(despl)
            console.log(pos)
            if (pos > maximpos) {
                // miramos si el indice + depslazamiento es igual a longitud
                pos = pos - maximpos
                // si lo es (por ej 25 + 3, para tener una posicion correcta habría que restar 28-25(total long))
                salida += abeced.charAt(pos)
            } else {
                salida += abeced.charAt(pos)
            }
        } else {
            salida += entrada.charAt(i)
        }
    }
    return salida
}

console.log(ascicodificacion(entrada));

/* ENTRADAS DE EJEMPLO 

ENTRADA: hola mundo SALIDA: krod pxqgr

ENTRADA: 15 euros SALIDA: 15 hxurv

ENTRADA: arroz SALIDA: duurc

*/