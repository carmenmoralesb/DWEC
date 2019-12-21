// CREACION CON NOTACION LITERAL

var Automovil = {
    marca: null,
    modelo: null,
    color: null,

    mostrarDatos = function() {
        return this.marca + "," + this.modelo + "," + this.color;
    }
}

var objeto1 = Object.create(Automovil);
objeto1.marca = 'Seat'
objeto2.modelo = 'Ibiza'
objeto3.color = 'Dorado'

alert(objeto1.mostrarDatos());

// CREACION CON FUNCION CONSTRUCTORA

function Automovil (marca,modelo,color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;

    this.mostrarDatos = function() {
        return this.marca + "," + this.modelo + "," + this.color;
    }
}

var objeto2 = new Automovil('Seat','Cordoba','Rojo');
alert(objeto2.mostrarDatos);