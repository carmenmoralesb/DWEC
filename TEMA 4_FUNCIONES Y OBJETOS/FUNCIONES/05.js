array = ['a','c','b','e','d'];

// funciona en mozilla no en chrome, mozilla si entiende los valores booleanos

array.sort(function (a,b) {
    if (a<b) {
        return 0;
    }

    else {
        return 1;
    }
    }
)