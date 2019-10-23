function dividir() {
    var resultado = ""
    var cociente = 0
    
    /* 
    
    1. Como divisor no puede ser mayor que dividendo si esto pasa cambio las variables
    2. Realizo un bucle infinito para restar divisor al dividendo hasta que se pueda
    3. Por cada resta sumo +1 al cociente
    4  Si dividendo es menor que divisor salgo del bucle
    5. Así el dividendo pasa a ser el resto (resultado de la ultima resta) y el cociente es el numero
       de veces que he podido restar divisor al dividendo

    */

    if (parseInt(document.getElementById("dividendo").value) > parseInt(document.getElementById("divisor").value)) {
        var dividendo = parseInt(document.getElementById("dividendo").value);
        var divisor = parseInt(document.getElementById("divisor").value);

    } else {
        var dividendo = parseInt(document.getElementById("dividendo").value);
        var divisor = parseInt(document.getElementById("divisor").value);
    }

    // creo un bucle infinito para ir restandole
    // al dividendo el divisor
    // el cociente será el numero de veces que pueda realizar una resta
    while (true) {
        dividendo = dividendo - divisor
        cociente += 1

        if (dividendo < divisor) {
            break;
            // en cuanto el dividendo sea menor, paro el bucle
        }
    }
    resultado = 'El cociente es ' + cociente + ' y el resto ' + dividendo
    document.getElementById('res3').value = resultado;
    return false;
}