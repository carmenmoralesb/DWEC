function sumanum() {
    var numero = parseInt(document.getElementById("sumadig").value);
    var suma = 0
    var resultado= ""
    var salida = ""

    /* En este programa he realizado lo siguiente: 

    1. Mientras que numero sea mayor que cero
    2. Voy guardndo en la variable digito el módulo de numero%10, es decir , el ultimo digito
    3. Voy dividiendo numero/10 y quedandome con la parte entera, la cual tendrá el resto de digitos
    4. Cojo el digito y se lo sumo a resultado.

    ==== EXTRA ==== 

    Como al comcatenar el simbolo de suma en el ultimo resultado salia "+" en vez de igual
    he hecho una condición donde si el modulo es menor o igual que cero la cadena a concatenar al digito
    es un = ya que será el ultimo resultado
    
    */

    while (numero > 0) {
        digito = numero % 10
        //console.log(digito);

        numero = parseInt(numero / 10)
        //console.log(numero);
        resultado+= digito + " + "

        if (parseInt(numero%10) <= 0) {
            resultado += digito + " = "
        } 
        suma += parseInt(digito)
    }

    salida = "El resultado de sumar " + resultado + " es " + suma 

    document.getElementById('res7').value = salida;
    return false;
}