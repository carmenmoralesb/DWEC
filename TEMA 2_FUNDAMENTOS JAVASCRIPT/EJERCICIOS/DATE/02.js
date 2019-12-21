var hoy = new Date() ;
var curso = new Date(2020,07,24);
var milsecundia = 1000*60*60*24 // milisegundos en un dia

var totalmil = curso.getTime() - hoy.getTime(); // con getime tnego la diferencia entre las dos fechas
var total = Math.floor(totalmil/milsecundia); // divido entre los milisgundos

console.log(total + ' dias para terminar el curso');

/* CORREGIDO POR MIGUEL
document.write("<p>EJERCICIO2</p>");
var dia_curso_actual = new Date(2019,9,27);
var fin_curso = new Date(2020,5,24);
var diferencia = fin_curso.getTime() - dia_curso_actual.getTime();
var dias_diferencia = (((diferencia/1000)/60)/60)/24;
document.write("<p>DÃ­as que faltan hasta fin de curso: " + dias_diferencia + "</p>"); */