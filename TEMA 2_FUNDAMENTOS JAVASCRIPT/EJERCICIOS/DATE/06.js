var entrada = prompt("Escribe algo");

var patronurl = new RegExp('^(http|https):\/\/w{3}\.[a-zA-Z0-9]+.(com|es)$');
var patrondni =  new RegExp('[0-9]{8}-[A-Z]{1}');
var patronisbn =  new RegExp('(978|979)-[0-9]{2}-[0-9]{5}-[0-9]{2}-[0-9]{1}');
var patroncadenanumfinal =  new RegExp('[A-Z]{1}[A-Z][a-z]*[0-9]{2}');
var patronip =  new RegExp("^192\\.168\\.(1[0-9][0-9]|2[0-5][0-5]|[1-9][0-9]|[0-9])\\.(1[0-9][0-9]|2[0-5][0-5]|[1-9][0-9]|[0-9])$");
var exp_parentesis = new RegExp("\\(.+\\)");

if (entrada.match(patronurl)) {
    console.log("es una URL");
}

if (entrada.match(patrondni)) {
    console.log("es un DNI");
}

if (entrada.match(patronisbn)) {
    console.log("Es un ISBN");
}

if (entrada.match( patroncadenanumfinal)) {
    console.log("Tiene una mayúscula al principio y dos números al final");
}

if (entrada.match(patronip)) {
    console.log("Es una IP");
}

if (entrada.match(palabraparentesis)) {
    console.log("Es una palabra entre paréntesis");
}


/* CORREGIDO POR MIGUEL
document.write("<p>EJERCICIO6</p>");
var dni = "48998123-L";
var url = "https://www.miweb.es";
var isbn = "978-92-95055-02-5";
var cadena = "L99";
var ip = "192.168.0.5";
var parentesis = "esta cadena tiene (parÃ©ntesis)";
//ExpresiÃ³n dni
var exp_dni = /^[0-9]{8}\-[A-Z]/;
document.write("<p>" + dni + " es vÃ¡lido: " + exp_dni.test(dni) + "</p>");
//ExpresiÃ³n url
var exp_url = new RegExp("^(http|https)://www\\.[A-Za-z]+\\.(com|es)$");
document.write("<p>" + url + " es vÃ¡lido: " + exp_url.test(url) + "</p>");
//ExpresiÃ³n isbn
var exp_isbn = new RegExp("^(978|979)-[0-9]{2}-[0-9]{5}-[0-9]{2}-[0-9]$");
document.write("<p>" + isbn + " es vÃ¡lido: " + exp_isbn.test(isbn) + "</p>");
//Comienza mayÃºscula y acaba en 2 dÃ­gitos
var exp_cadena = new RegExp("^[A-Z].*[0-9]{2}$");
document.write("<p>" + cadena + " es vÃ¡lida: " + exp_cadena.test(cadena) + "</p>");
//ExpresiÃ³n IP
var exp_ip = new RegExp("^192\\.168\\.(1[0-9][0-9]|2[0-5][0-5]|[1-9][0-9]|[0-9])\\.(1[0-9][0-9]|2[0-5][0-5]|[1-9][0-9]|[0-9])$");
document.write("<p>" + ip + " es vÃ¡lida: " + exp_ip.test(ip) + "</p>");
//ParÃ©ntesis
var exp_parentesis = new RegExp("\\(.+\\)");
document.write("<p>" + parentesis + " es vÃ¡lida: " + exp_parentesis.test(parentesis) + "</p>"); */