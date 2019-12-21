function Diputado(nombre, apellidos, edad, partido) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = comprobarEdad(edad) // || 38;
    this.partido = partido;
    propiedades = []

    // las propiedades no visibles se ponen sin this

    this.mostrarInfo = function () {
        var res = "<h2>Información del diputado</h2>" + this.nombre + "<br>" + this.apellidos + "<br>" + this.edad + "<br>" + this.partido + "<br>";
        res += "<h2>Propiedades</h2>";

        for (i = 0; i < propiedades.length; i++) {
            res += propiedades[i] + "<br>";
        }
        return res;
    }

    function comprobarEdad(edad) {
        if (edad < 0 || edad > 90 || edad == undefined) {
            return 30;
        } 
        else {
            return edad;
        }
    }

    // propiedad para añadir propiedades
    this.anadirPropiedad = function () { // para pasar los arguments hay que dejar la funcion vacía y hacer el for en arguments
        for (i = 0; i < arguments.length; i++) {
            propiedades.push(arguments[i]);
        }
    }
}

var arraydiputados = new Array();

arraydiputados.push(new Diputado('Diputado1', 'Prueba', 60, 'PP'));
arraydiputados.push(new Diputado('Diputado2', 'Prueba1', 29, 'PSOE'));
arraydiputados.push(new Diputado('Diputado3', 'Prueba2', 30, 'VOX'));
arraydiputados.push(new Diputado('Diputado4', 'Prueba3', 48, 'PODEMOS'));

arraydiputados[0].anadirPropiedad("Propiedad 1", "Propiedad2");
arraydiputados[1].anadirPropiedad("Porpiedad 1", "Porpiedad 2");

arraydiputados.sort(function (a, b) {
    if (a.edad > b.edad) {
        return 1;
    } else {
        return -1;
    }
})

for (i = 0; i < arraydiputados.length; i++) {
    document.write(arraydiputados[i].mostrarInfo());
}