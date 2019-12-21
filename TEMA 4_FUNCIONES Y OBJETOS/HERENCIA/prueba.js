var array = new Array();
array.push(new Televisor(150,'gris','A',50,100,true,50));
array.push(new Televisor(100,'gris','A',50,100,false,30));
array.push(new Televisor(100,'gris','A',50,100,true,30));

array.push(new Lavadora(180,'gris','A',50,100));
array.push(new Lavadora(250,'azul','F',50,100));
array.push(new Lavadora(300,'blanco','E',50,100));


var prec_lavadora = 0
var prec_televisor = 0

for (var i=0;i<= array.length;i++) {
    if (array[i] instanceof Lavadora == true) {
        prec_lavadora = prec_lavadora + array[i].precioFinal1()
    }

    if (array[i] instanceof Televisor == true) {
        prec_televisor = prec_televisor + array[i].precioFinal2()
    }
}

document.write("<p>PRECIOS FINALES</p>" + "Precios de las lavadoras " + String(prec_lavadora)  + " Precios de televisor " + String(prec_televisor));