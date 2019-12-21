function validarFecha (fecha) {
    fechaCadena = String(fecha)
    fechaSeparada = fechaCadena.split('/')

    dia = Number(fechaSeparada[0])
    mes = Number(fechaSeparada[1])
    ano = Number(fechaSeparada[2])
    
    console.log(dia,mes,ano);

    if (dia <= 31 && dia >= 1 && mes > 1 && mes < 12 && ano >=1900 && ano<=2999) {
    if (mes==2) {
        if (dia > 1 && dia < 28) {
            alert("Es válida");
        }
        else {
            alert("No es válida");
        }
    }

    else {
        alert("Es válida");
    }
}

    else {
        alert("No es una fecha válida");
    }
}