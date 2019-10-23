function primos() {
    var primos = false
    var resultado = ""
    var mcd = 1


    /* Aquí he puesto primero una comprobación para ver que numero1 es el mayor, si no lo es cambio
    las variables 
    
    1. Si numero1 es divisible entre numero2 no pueden ser primos, ya que tienen de divisor comun a numero2
    2. Si no lo son hya que mirar los divisores, yo hago un bucle for para comprobar si los numeros del 0 al numero2 (el pequeño) son divisores de numero1 o de 2
    3. Si se cumple el mcd pasa a ser i
    4. Si no se cumple el mcd es 1 por tanto son primos
    
    */

    if (parseInt(document.getElementById("primo1").value) > parseInt(document.getElementById("primo2").value)) {

        var numero1 = parseInt(document.getElementById("primo1").value);
        var numero2 = parseInt(document.getElementById("primo2").value);

    } else {
        var numero1 = parseInt(document.getElementById("primo2").value);
        var numero2 = parseInt(document.getElementById("primo1").value);
    }


    if (numero1%numero2==0) {
        mcd=numero2
    }

    else {
        for (i=0;i<=numero2;i++) {
            if (numero1%i==0 && numero2%i==0) {
                mcd = i
            }
        }
    }

    if (mcd==1) {
        primos = true
    }

    else {
        primos = false
    }

        if (primos == false) {
            resultado = 'No son primos porque el maximo comun es ' + mcd
        } else {
            resultado = 'Son primos ya que el maximo comun es ' + mcd
        }

        document.getElementById('res2').value = resultado;
        return false;
}