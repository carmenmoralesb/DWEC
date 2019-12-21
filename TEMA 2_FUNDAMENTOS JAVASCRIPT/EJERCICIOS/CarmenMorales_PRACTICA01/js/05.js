function cambiobase() {

    var decimal = parseInt(document.getElementById("decimal").value);
    var base = parseInt(document.getElementById("base").value);
    var resultado = ""
    var salida = ""

    /* Si decimal es distinto de uno realizo el siguiente procedimiento 
    
    1.Miro la base que ha dado el usuario para ver con qué numero tengo que relizar el módulo
    2.Mientras que el decimal se pueda dividir por la base
    3.Voy guardando en la variable resultado el resto de la división decimal/base. Al tener que leer el resultado "al revés",
    le voy concatenando antes del resultado el módulo. De modo que al resto que se va hallando se le une el resultado detrás.
    4.Voy dividiendo el decimal entre la base de forma que el proximo numero en hallar el módulo sea 
    el cociente.
    5.Cuando ya no puedo dividir más en la variable salida guardo el último cociente y le concateno el resultado


    ===================HEXADECIMAL==============================

    En hexadeciml cambia un poco el algoritmo ya que a partir del numero 10 los valores son distintos, y no
    se contempla el numero 11,12,13 ... como un dígito válido. De modo que lo que hago es mirar si el resultado
    del módulo es 10,11,12,13,14 o 15 y concateno el digito equivalente al resultado.
    */

    if (decimal != 1) {
        if (base == 2) {
            // mientras que decimal/2 no de 0
            while (parseInt(decimal / 2)) {
                resultado = (decimal % 2) + resultado
                decimal = parseInt(decimal / 2)
            }
            salida = "La solución es " + decimal + resultado 
        }

        if (base == 8) {
            while (parseInt(decimal / 8)) {
                resultado = (decimal % 8) + resultado
                decimal = parseInt(decimal / 8)
            }
            salida = "La solución es " + decimal + resultado
        }

        if (base == 16) {
            while (parseInt(decimal / 16)) {
                digito = parseInt(decimal % 16)
                decimal = parseInt(decimal / 16)

                if (digito == 10) {
                    resultado = 'A' + resultado
                }
                if (digito == 11) {
                    resultado = 'B' + resultado
                }
                if (digito == 12) {
                    resultado = 'C' + resultado
                }
                if (digito == 13) {
                    resultado = 'D' + resultado
                }
                if (digito == 14) {
                    resultado = 'E' + resultado
                }
                if (digito == 15) {
                    resultado = 'F' + resultado
                }

                if (digito < 10) {
                    resultado = digito + resultado
                }
            }
        }
        salida = "La solución es " + decimal + resultado
    }

    else {
        salida = "La solución es 1"
    }
    document.getElementById('res5').value = salida;
    return false;
}