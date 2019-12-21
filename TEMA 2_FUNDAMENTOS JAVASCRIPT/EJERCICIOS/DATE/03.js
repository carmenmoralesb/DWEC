var fmin = new Date(2019,9,23);
var fmax = new Date(2100,11,31);
var diaseg = 1000 * 60 * 60 * 24;

var diacumple = prompt("¿Qué dia es tu cumpleaños?");
var mescumple = prompt("¿Qué mes es tu cumpleaños?");

while (fmin.getTime() <= fmax.getTime()) {
    var dia = fmin.getDay();

    if (dia == 0) {
        if (fmin.getMonth()==mescumple-1 && fmin.getDate()==diacumple) {
            console.log('El dia ' + diacumple + ' de ' + mescumple + ' cae en domigno en el año ' + fmin.getFullYear());
            //console.log(fmin.getDate() + ' ' + fmin.getFullYear());
        }
    }
    fmin = new Date(+fmin + diaseg);
  }

/* CORREGIDO POR MIGUEL

document.write("<p>EJERCICIO3</p>");
var cumpleaÃ±os = new Date();
cumpleaÃ±os.setMonth(6);
cumpleaÃ±os.setDate(31);
var mensaje = "";
for (var i = 2019; i<= 2100; i++){
    cumpleaÃ±os.setFullYear(i);
    dia = cumpleaÃ±os.getDay();
    if (dia == 0){
        mensaje = mensaje + i + " ";
    }
}
document.write("<p>AÃ±os en los que el cumpleaÃ±os cae en domingo: " + mensaje + "</p>"); */