function multiplicar() {
    var numero1 = parseInt(document.getElementById("fac1").value);
    var numero2 = parseInt(document.getElementById("fac2").value);

    var resultado = 0

    // aquí cojo los numeros del 1 al numero2 y los voy sumando
    // se podria hacer más eficiente también sumando el numero mayor un numero de veces igual al numero más pequeño
    for (i = 1; i <= numero2; i++) {
        resultado += parseInt(numero1)
    }

    document.getElementById('res4').value = resultado;
    return false;
}