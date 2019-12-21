function mostrarCadena () {
    var resultado = "";
    var separador = arguments[0]
    console.log(separador);

    // Iterar a través de los otros argumentos enviados
    for (var i = 1; i < arguments.length; i++) {
      resultado += arguments[i] + separador;
      if (i==arguments.length-1) {
        resultado += arguments[i]
      }
    }
    console.log(resultado);
  }
    