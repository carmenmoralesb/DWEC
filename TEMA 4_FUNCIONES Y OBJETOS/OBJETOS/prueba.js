var cuenta1= Object.create(Cuenta);
cuenta1.titular= 'Pepito Pérez'
cuenta1.cantidad = 18000

document.write("<h4>=============== OBJETO CUENTA  =====================</h4>")

document.write("<p>Datos de la cuenta:  "  + cuenta1.imprimeDatos()) + "<p>";
document.write("<p>Se ha ingresado dinero, la cantidad actual es "  +  cuenta1.IngresarCantidad(1000)) + "<p>";
document.write("<p>Se ha retirado dinero, la cantidad actual es  " + cuenta1.RetirarCantidad(2000)) + "<p>";
document.write("<p>Se ha retirado más dinero del disponible, se pondrá la cuenta a  " + cuenta1.RetirarCantidad(20000)) + "€ <p>";

var ecuacion = new Raiz(1,10,25);

document.write("<h4>=============== ECUACIONES =====================</h4>")

document.write("<p>El discriminante es " + ecuacion.getDiscriminante() + "</p>");

if (ecuacion.tipoSolucion() == -1) {
    document.write("<p>No hay solución</p>");
}

else if (ecuacion.tipoSolucion() == 1) {
    document.write("<p>Hay una solución</p>");
}

else {
    document.write("Hay dos soluciones");
}

document.write("<p>" + ecuacion.calcular() + "</p>");


document.write("<h4>=============== NÚMEROS COMPLEJOS =====================</h4>")

var complejo = new Complejo(3,-3);
document.write("<p>Complejo 1: </p>" + complejo.Impreso());
var complejo2 = new Complejo(-1,3);
document.write("<p>Complejo 2: </p>" + complejo2.Impreso());
document.write("<p>MODULO</p>" + complejo.Modulo());
document.write("<p>ARGUMENTO</p>" + complejo.Argumento());
document.write("<p>OPUESTO</p>" + complejo.Opuesto().Impreso());
document.write("<p>CONJUGADO:</p> " + complejo.Conjugado().Impreso());

document.write("<p>SUMA de numeros complejos</p>" + complejo.Suma(complejo2).Impreso());
document.write("<p>RESTA de numeros complejos</p>" + complejo.Resta(complejo2).Impreso());
document.write("<p>MULTPLICACIÓN de numeros complejos</p>" + complejo.Producto(complejo2).Impreso());
document.write("<p>DIVISIÓN de numeros complejos</p>" + complejo.Cociente(complejo2).Impreso());


document.write("<h4>=============== PERSONA =====================</h4>")
var profesion = new Profesion('Político', 12541545)

var gertrudis = new Persona('Gertrudis',75,profesion,'J',76,168);

document.write("<p>Datos de la persona:  "  + gertrudis.imprimir() + "<p>");
