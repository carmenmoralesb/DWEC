var correo = prompt("Introduce un e-mail")
var salida = ""
var correcto = false

// cuando search no encuentra la substring devuelve -1 
// si el search de correo es distinto de -1
if (correo.search('@') != -1) {
   if ((correo.search('.com') != -1) || (correo.search('.es') != -1)) {
       correcto = true
    }
}
else {
    correcto = false
}

if (correcto==true) {
    salida = 'Es correcto'
}
else {
    salida = 'No es correcto'
}

console.log(salida);