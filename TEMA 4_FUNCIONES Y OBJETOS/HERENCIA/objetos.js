function Electrodomestico(precio_base = 100, color = 'blanco', consumo_electrico = 'F', peso = 5) {
    this.precio_base = precio_base
    this.color = comprobarColor(color);
    this.consumo_electrico = comprobarConsumo(consumo_electrico);
    this.peso = comprobarPeso(peso);
    //this.precio_final = precioFinal()

    this.imprimeElectrodomestico = function () {
        return "precio " + this.precio_base + " color: " + this.color + " consumo: " + this.consumo_electrico + " peso: " + this.peso;
    }

    function comprobarColor(color) {
        colores_disponibles = ['blanco', 'negro', 'rojo', 'azul', 'gris'];

        if (!color) {
            return colores_disponibles[0];
        } else if (colores_disponibles.indexOf(color.toLowerCase()) == -1) {
            return colores_disponibles[0];
        } else {
            color.toLowerCase();
            return color;
        }
    }

    function comprobarConsumo(consumo_electrico) {
        letras = 'ABCDEF';

        if (!consumo_electrico) {
            return 'F'
        } else if (letras.search(consumo_electrico) == -1) {
            return 'F'
        } else {
            return consumo_electrico
        }
    }

    function comprobarPeso(peso) {
        if (!peso) {
            return 5
        } else {
            return peso
        }
    }


    this.precioFinal = function () {
        var aumento = 0
        if (this.consumo_electrico == 'A') {
            aumento += 100

        } 
        else if (this.consumo_electrico == 'B') {
            aumento += 50
        } 
        
        else if (this.consumo_electrico == 'C') {
            aumento += 60
        } 
        
        else if (this.consumo_electrico == 'D') {
            aumento += 50
        } 
        
        else if (this.consumo_electrico == 'E') {
            aumento += 30
        } 
        
        else  {
            aumento += 20
        }

        if (this.peso > 0 && this.peso <= 19) {
            aumento += 10
        } 
        else if (this.peso >= 20 && this.peso <= 49) {
            aumento += 50
        } 
        else if (this.peso >= 50 && this.peso <= 79) {
            aumento += 80
        } 
        else {
            aumento += 10
        }

         var total = this.precio_base + aumento
         return total;
    }
}


Lavadora.prototype = new Electrodomestico();

function Lavadora (precio_base,color,consumo_electrico,peso,carga) {
    Electrodomestico.call(this,precio_base, color, consumo_electrico, peso);
        this.carga = carga;
    

    this.imprimeLavadora = function () {
        return this.imprimeElectrodomestico() + "  " + String(this.carga);
    }

    this.precioFinal1 = function () {
        var precio = this.precioFinal();
        var plus = 0
        if (this.carga >= 30) {
            plus += 50
            var total = precio + plus
        }
        return total

    }
}


Televisor.prototype = new Electrodomestico();

function Televisor (precio_base,color,consumo_electrico,peso,resolucion=20,sintonizador=false) {
    Electrodomestico.call(this,precio_base, color, consumo_electrico, peso);
        this.sintonizador = sintonizador;
        this.resolucion = resolucion;
    

    this.imprimeTelevisor = function () {
        return this.imprimeTelevisor() + "  " + String(this.sintonizador) + String(this.resolucion);
    }

    this.precioFinal2 = function () {
        var precio = this.precioFinal();
        var plus = 0;

        if (this.resolucion >= 40) {
            plus += (40*precio_base)/100 + precio_base
            var total = precio + plus
        }

        if (this.sintonizador) {
            plus += 50
            var total = precio + plus
        }

        return total

    }
}

 