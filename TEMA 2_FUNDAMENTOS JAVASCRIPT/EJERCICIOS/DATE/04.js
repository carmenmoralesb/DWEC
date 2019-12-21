var diacumple = prompt("¿Qué dia es tu cumpleaños?");
var mescumple = prompt("¿Qué mes es tu cumpleaños?");
var hoy = new Date();
var sigcumple = new Date(hoy.getFullYear()+1,mescumple-1,24);
console.log(sigcumple);
//var milsecundia = 1000*60*60*24 // milisegundos en un dia

var totalmil = sigcumple.getTime() - hoy.getTime();
var total = parseInt(totalmil/1000); // con getime tnego la diferencia entre las dos fechas

console.log(total + ' segundos para tu cumpleaños');

/* CORREGIDO POR MIGUEL 

document.write("<p>EJERCICIO4</p>");
var dia_anyo_actual = new Date(2019,9,27);
var cumpleaÃ±os = new Date(2020,6,31);
var diferencia = cumpleaÃ±os.getTime() - dia_anyo_actual.getTime();
var segundos_diferencia = diferencia / 1000;
document.write("<p>Segundos hasta prÃ³ximo cumpleaÃ±os: " + segundos_diferencia + "</p>");
*/