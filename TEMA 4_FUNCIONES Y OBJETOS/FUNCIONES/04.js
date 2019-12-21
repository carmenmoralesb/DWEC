window.setInterval
(
    function() {
        var d = new Date();
        var hora = d.getHours();
        var minutos = d.getMinutes();
        var segundos = d.getSeconds();

        if (hora<10) {
            hora = '0' + hora
        }
        
        if (minutos<10) {
            minutos = '0' + minutos
        }
        
        if (segundos<10) {
            segundos = '0' + segundos
        }

        document.write(hora + ":" + minutos + ":" + segundos + "<br>");
    },
    1000
    )