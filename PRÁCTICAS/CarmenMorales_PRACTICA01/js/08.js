function cerofac() {
    var numero = parseInt(document.getElementById("cerofacto").value);
    var contador = 0
    var factorial = 1
    var auxi = 0
    var salida = ""


    /* Para hallar los ceros del factorial he hecho lo siguiente 
    
    1. El factorial de un numero es el producto de sus numeros anteriores incluido el 1 y el mismo es decir
       5! = 5x5 + 5x4 + 5x3 + 5x2 + 5x1 = 120
    2. Por tanto he sacado los numeros desde i=1 hasta numero y he almacenado su producto en la variable factorial
    3. Despues en un bucle while mientras el factorial sea divisible entre 10
    4. Voy sumandole 1 a un contador, que será el numero de ceros al final. Si no hay ceros al final no tendremos como reusltado una división enetera.
    
    */

    for (i = 1; i <= numero; i++) {
        factorial = factorial * i
    }

    auxi = factorial

    while (factorial%10==0) {
        factorial = (factorial / 10)
        contador += 1
        
    }

    salida = "El factorial del numero es " + auxi + " el número de ceros al final es " + contador
    
    document.getElementById('res8').value = salida;
    return false;
}