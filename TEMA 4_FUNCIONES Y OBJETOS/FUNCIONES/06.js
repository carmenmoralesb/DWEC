function ordenarLista () {
    var resultado = "";
    var booleano = arguments[0]
    console.log(booleano);

    // Iterar a través de los otros argumentos enviados
        if (booleano==true) {
            resultado = "<ol>"
                for (var i = 1; i < arguments.length; i++)  {
                resultado += "<li>"+arguments[i]+"</li>";
            }
            resultado += "</ol>"   
        }
        else {
            resultado = "<ul>"
            for (var i = 1; i < arguments.length; i++)  {
                resultado += "<li>"+arguments[i]+"</li>";
            }
            resultado += "</ul>"   
        }
        document.write(resultado);

        }