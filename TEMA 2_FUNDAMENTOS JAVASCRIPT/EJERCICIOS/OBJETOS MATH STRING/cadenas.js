// obtener el largo de una cadena
var manzana = "manzana"
manzana.length
// Salida: 7


// encontrar una cadena en una cadena
var manzana = "manzana"
manzana.search('ana')
// Salida: 4

// encontrar un caracter, devuelve un indice o -1
var manzana = "manzana"
manzana.charAt(1)
// Salida: "a"

// devuelve el valor unicode del caracter del indice elegido
var manzana = "manzana"
manzana.charCodeAt('3')
// Salida: 122

// devuelve el indice de la primera ocurrencia que le pasamos como argumento, si no encuentra devuelvle -1
var str1 = new String( "This is string one" );
var index = str1.indexOf( "string" );
document.write("indexOf found String :" + index ); 

document.write("<br />");
var index = str1.indexOf( "one" );
document.write("indexOf found String :" + index ); 


// devuelve el índice de la última ocurrencia, si no -1
var str1 = new String( "This is string one and again string" );
var index = str1.lastIndexOf( "string" );
document.write("lastIndexOf found String :" + index ); 

document.write("<br />");         
var index = str1.lastIndexOf( "one" );
document.write("lastIndexOf found String :" + index ); 


// devuelve las coincidencias con una expresión regular
var str = "For more information, see Chapter 3.4.5.1";
var re = /(chapter \d+(\.\d)*)/i;
var found = str.match( re );         
document.write(found); 


// reemplaza la subcadena de la expresión regular con el segundo argumento
var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace(re, "oranges");        
document.write(newstr );


// devuelve el índice de la coincidencia
var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";

if ( str.search(re) == -1 ) {
   document.write("Does not contain Apples" );
} else {
   document.write("Contains Apples" );
}


// extrae una sección del string y devulve una nueva cadena 
var str = "Apples are round, and apples are juicy.";
var sliced = str.slice(3, -2);         
document.write( sliced );

//salida = les are round, and apples are juic


// convierte una cadena en un array

var manzana = "manzana"
var espliteado = manzana.split("")
// salida = ["m", "a", "n", "z", "a", "n", "a"]


// extracción de subcadenas
var manzana = "manzana"
// coge el índice 1 y a partir de ahi coge dos caracteres empezando por el 1
manzana.substr(1,2)
// salida = "an"


// extracción de un caracter entre dos indices, por ejemplo entre el 1(a) y el 4(a), está la subcadena anz
var manzana = "manzana"
undefined
manzana.substring(1,4)
// salida = "anz"
