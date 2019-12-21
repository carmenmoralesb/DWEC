function Generar() {
    array_num = new Array()
    var cajas = document.getElementsByClassName("caja");

    for (i = 0; i <= cajas.length; i++) {
        array_num.push(Math.floor(Math.random() * 9) + 1)
    }

    for (i = 0; array_num.length; i++) {
        cajas[i].innerHTML = "<p>" + array_num[i] + "</p>"
    }
}


function OrdenaNum() {
    desc = document.getElementById("asc").checked
    asc = document.getElementById("desc").checked
    var cajas = document.getElementsByClassName("caja");
    array_num = new Array()

    for (i = 0; i < cajas.length; i++) {
        array_num.push(cajas[i].innerHTML)
    }

    if (desc) {
        contenedor = document.getElementById("container");
        contenedor.style.display= "flex"
        cargando= document.getElementById("cargando");
        cargando.style.display = "none"

        array_num.sort(function (a, b) {
            if (a > b) {
                return 1;
            } else {
                return -1;
            }
        })
        for (i = 0; array_num.length; i++) {
            var caja = cajas[i]
            caja.innerHTML = "<p>" + array_num[i] + "</p>"
        }
    }

    if (asc) {
        contenedor = document.getElementById("container");
        contenedor.style.display= "flex"
        cargando= document.getElementById("cargando");
        cargando.style.display = "none"

        array_num.sort(function (a, b) {
            if (a < b) {
                return 1;
            } else {
                return -1;
            }
        })
        for (i = 0; array_num.length; i++) {
            cajas[i].innerHTML = "<p>" + array_num[i] + "</p>"
        }
    }
}

function Ordenar() {
    contenedor = document.getElementById("container");
    contenedor.style.display= "none"

    cargando= document.getElementById("cargando");
    cargando.style.display = "block"
    window.setInterval(OrdenaNum, 5000)
}