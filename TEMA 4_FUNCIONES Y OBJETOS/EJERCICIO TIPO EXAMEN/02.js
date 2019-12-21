function Vehiculo(peso = 100) {
    this.peso = peso;

    this.impuestoBase = function () {
        var impuesto = this.peso * 0.45
        return impuesto
    }
}


Electrico.prototype = new Vehiculo();

function Electrico(peso = 100, precio) {
    Vehiculo.call(this, peso);
    this.precio = precio;


    this.imprimeElectrico = function () {
        return this.peso + "  " + this.precio;
    }

    this.impuestoBase = function () {
        var impuesto_base = this.impuestoBase()
        // llamamos al metodo impuetobase del padre y le sumamos el del hijo
        var total = impuesto_base + this.precio * 0.09
        return total
    }
}


function Combustion(peso = 100, cilindrada) {
    Vehiculo.call(this, peso);
    this.cilindrada = cilindrada;


    this.imprimeCombustion = function () {
        return this.peso + "  " + this.cilindrada;
    }

    this.impuestoBase = function () {
        var impuesto_base = this.impuestoBase()
        var total = impuesto_base + this.cilindrada * 3
        return total
    }
}

var arraycoches = new Array();
arraycoches.push(new Electrico(3, 3));
arraycoches.push(new Combustion(2, 2));
arraycoches.push(new Electrico(4, 4));
arraycoches.push(new Combustion(4, 5));

for (i = 0; i < arraycoches.length; i++) {
    var total = 0;
    if (arraycoches[i] instanceof Electrico) {
        total += arraycoches[i].impuestoBase();
    }

    if (arraycoches[i] instanceof Combustion) {
        total += arraycoches[i].impuestoBase();
    }
}

document.write(total);