// CREAR UN OBJETO CUENTA CON NOTACION LITERAL

var Cuenta = {
    titular: null,
    cantidad: null,

    imprimeDatos: function () {
        return this.titular + "  cantidad de dinero: " + this.cantidad + "€";
    },

    IngresarCantidad: function (ingreso) {
        if (ingreso > 0) {
            this.cantidad += ingreso;
            return this.cantidad
        } else {
            this.cantidad = this.cantidad;
            return "No se ha ingresado dinero"
        }
    },

    RetirarCantidad: function (retirada) {
        if (retirada > 0) {
            if (retirada > this.cantidad) {
                this.cantidad = 0
                return this.cantidad
            } else {
                this.cantidad -= retirada;
                return this.cantidad
            }
        } else {
            this.cantidad = this.cantidad;
        }
    }
}


// EJERCICIO 2 RAÍZ

function Raiz(a, b, c) {
    this.a = Number(a);
    this.b = Number(b);
    this.c = Number(c);

    this.getDiscriminante = function () {
            discriminante = (this.b ** 2) - 4 * this.a * this.c
            return discriminante
        },

        this.tipoSolucion = function () {
            if (this.getDiscriminante < 0) {
                return -1;
            } else if (this.getDiscriminante == 0) {
                return 1
            } else {
                return 2
            }
        },

        this.calcular = function () {
            var positivo = 0;
            var negativo = 0;

            if (this.tipoSolucion == -1) {
                return "No hay solución";
            } else if (this.tipoSolucion == 1) {
                positivo = ((this.b - this.b * 2) + Math.sqrt((this.b ** 2) - (4 * this.a * this.c))) / (2 * this.a)
                return "La ecuación tiene la solucion " + positivo;
            } else {

                positivo = ((this.b - this.b * 2) + Math.sqrt((this.b ** 2) - (4 * this.a * this.c))) / (2 * this.a)
                negativo = -((this.b - this.b * 2) - Math.sqrt((this.b ** 2) - (4 * this.a * this.c))) / (2 * this.a)

                return "La ecuación tiene dos soluciones: " + positivo + " , " + negativo;
            }
        }
}

// EJERCICIO 3 NUMEROS COMPLEJOS

function Complejo(a, b) {
    this.a = Number(a);
    this.b = Number(b);

    this.Modulo = function () {
            var modulo = 0
            modulo = Math.sqrt(Math.pow(this.a,2) + Math.pow(this.b,2))
            return modulo;
        },

        this.Argumento = function () {
            var argumento = 0
            if (this.a != 0) {
                argumento = Math.atan(parseInt(this.b / this.a))
            }
            return argumento;
        },

        this.Opuesto = function () {
            var resultado = new Complejo()

            if (this.a > 0) {
                a = -this.a
            } else {
                a = this.a * (-1)
            }
            b = this.b

            resultado.a = a
            resultado.b = b

            return resultado;
        }

    this.Conjugado = function () {
        // cambiar signo a la part eimaginaria
        var resultado = new Complejo()

        if (this.b > 0) {
            b = -this.b
        } else {
            b = b * (-1)
        }

        resultado.a = a
        resultado.b = b

        return resultado;

    }

    this.Suma = function (objeto) {
            var sumareal = 0
            var sumaimaginaria = 0

            var resultado = new Complejo()

            sumareal = (this.a + objeto.a)
            sumaimaginaria = (this.b + objeto.b)

            resultado.a = sumareal
            resultado.b = sumaimaginaria

            return resultado;
        },

        this.Resta = function (objeto) {
            var restareal = 0
            var restaimaginaria = 0

            var resultado = new Complejo()

            restareal = (this.a - objeto.a)
            restaimaginaria = (this.b - objeto.b)

            resultado.a = restareal
            resultado.b = restaimaginaria

            return resultado;
        },

        this.Producto = function (objeto) {
            var preal = 0
            var pimaginaria = 0

            var resultado = new Complejo()

            preal = this.a * objeto.a - this.b * objeto.b
            pimaginaria = this.a * objeto.b + this.b * objeto.a

            resultado.a = preal
            resultado.b = pimaginaria

            return resultado;
        },

        this.Cociente = function (objeto) {
            var resultado = new Complejo()

            var preal = 0
            var pimaginaria = 0

            preal = (this.a * objeto.a + this.b * objeto.b) / (objeto.a ** 2 + objeto.b ** 2)
            pimaginaria = (this.b * objeto.a - this.a * objeto.b) / (objeto.a ** 2 + objeto.b ** 2)

            resultado.a = preal
            resultado.b = pimaginaria

            return resultado;
        }

    this.Impreso = function () {
        if (this.b > 0) {
            return String(this.a) + " + " + String(this.b) + "i"
        } else if (this.b < 0) {
            return String(this.a) + " " + String(this.b) + "i"

        }
        return String(this.a)
    }
}

function Persona(nombre, edad, profesion, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
    this.dni = generarDNI();
    this.sexo = comprobarSexo(sexo);
    this.peso = peso;
    this.altura = altura;

    this.calcularIMC = function () {
            var imc = 0
            imc = this.peso / ((this.altura / 100) ** 2)


            if (imc < 20) {
                return -1
            } else if (imc >= 20 || imc <= 25) {
                return 0
            } else {
                return 1
            }
        }

    function comprobarSexo(sexo) {
        if (sexo != 'H' || sexo != 'M') {
            return 'H'
        } else {
            return sexo;
        }
    }

    this.esMayordeEdad = function () {
        if (this.edad > 18) {
            return 0;
        }

        else {
            return 1;
        }
    }
    
    function generarDNI() {
        var letrasdni = "TRWAGMYFPDXBNJZSQVHLCKE";
        var numgenerado = Math.floor(Math.random() * 99999999) + 10000000;
        var mod = numgenerado % 23
        dni = String(numgenerado) + String(letrasdni.charAt(mod));
        return dni;
    }

    this.imprimir = function () {
        return "<p>Nombre: " + this.nombre + "</p><p>Edad: " + this.edad + "</p><p>DNI: " + this.dni + "</p><p> SEXO: " + this.sexo + "</p><p> PESO: " + this.peso + " kg" + "</p><p>ALTURA: " + this.altura + " cm" + "</p><p>PROFESION " + profesion.imprime();
    }
}

function Profesion(nombre, sueldo) {
    this.nombre = nombre;
    this.sueldo = Number(sueldo);

    this.imprime = function () {
        return this.nombre + " " + this.sueldo + " €";
    }
}