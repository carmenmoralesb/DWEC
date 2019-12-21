var numentero = -2;
var binario = "10010";
var numreal = 2.5;
var twitter = "@usuario";

// (un grupo de busqueda)
// ^ principio de cadena
// valores$ final de cadena

var exp_numentero = /[0-9]+|-[0-9]+/;
if (exp_numentero.test(numentero)) {
    console.log("es válido");
}

// el caracter de escape \ permite escapar caracteres literales
var exp_binario = /[0-1]+/;
if (exp_binario.test(binario)) {
    console.log("es válido");
 }
// el + indica que hay uno o más coincidencias (mínimo 1)

// * es cero o más veces
var exp_numreal = /^[0-9]+\.*[0-9]/;
if (exp_numreal.test(numreal)) {
    console.log("es válido");
 }
// ? busca el caracter precedente cero o una vez
var exp_twitter = /^@(\w){1,15}$/;
// (\w) cualquier caracter alfanumerico
if (exp_twitter.test(twitter)) {
    console.log("es válido");
 }
// [A-Z] un rango
// {n} coincide en n veces
// \W caracteres que no son del alfabeto latino