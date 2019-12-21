var radio = prompt("Escribe el radio de un círculo");

// ================ CÍRCULO ===================== //
diametro = radio * 2 
area = Math.trunc( Math.PI * Math.pow(radio,2)) 
perimetro = Math.trunc(diametro*Math.PI) 

// ================ ESFERA ===================== //
areaEsfera = Math.trunc(4*Math.PI*(Math.pow(radio,2)))
volEsfera = Math.trunc(4/3*Math.PI*(Math.pow(radio,3)))

// ================ CÍRCULO ===================== //
console.log('El radio mide ' + radio + ' cm')
console.log('El diámetro de la circunferencia es ' + diametro + ' cm')
console.log('El area de la circunferencia es ' + area + ' cm2')
console.log('El perimetro de la circunferencia es ' + perimetro + ' cm')


// ================ ESFERA ===================== //
console.log('El área de una esfera sería ' + areaEsfera.toExponential() + ' cm2')
console.log('El volumen de una esfera sería ' + volEsfera + ' cm3')