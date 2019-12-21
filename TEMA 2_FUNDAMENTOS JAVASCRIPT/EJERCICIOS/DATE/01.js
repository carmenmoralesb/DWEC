var actual = new Date();
var dia_actual = actual.getDate();
var mes_actual = actual.getMonth()+1;

if (mes_actual < 10) {
    mes_actual = "0"+mes_actual
};

var anyo_actual = actual.getFullYear();
var hora_actual = actual.getHours();

if (hora_actual < 10) {
    hora_actual = "0"+hora_actual;
}
var minutos_actual = actual.getMinutes()

if (minutos_actual < 10) minutos_actual = "0"+minutos_actual;
document.write("<p>Estamos a di­a " + dia_actual + " de " + mes_actual +
                " del " + anyo_actual + " y hora " + hora_actual +":" 
                + minutos_actual + "</p>");