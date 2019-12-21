// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  var num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

// tragabolas

// se define el constructor de la bola

function Ball(x, y, velX, velY, color, size,img) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
  this.img = img;
}

// se define el metodo dibujar de bola

Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

// se define el metodo update de bola

Ball.prototype.update = function () {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
};


// se define la deteccion de colisiones

Ball.prototype.collisionDetect = function () {
      var dx = tragabola.x - this.x;
      // miro el eje xy de this que es la bola
      var dy = tragabola.y - this.y;
      var distance = Math.sqrt(dx * dx + dy * dy);
      // se calcula con una formula
      if (distance < tragabola.size + this.size) {
        return true;
      }

      return false;
    };


// definir un array de bolas para almacenarlas

var balls = [];

while (balls.length < 10) {
  var size = random(20,30);

  var ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
    size
  );
  balls.push(ball);
}

// crear un tragabolas que sera un objeto bola mas grande

var tragabola = new Ball (random(1 + size, width - size),
                          random(1 + size, height - size),
                          random(-7, 7),
                          random(-7, 7),
                          'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
                          80, 'kirby.png');


contador = 0;
for (var i = 0; i < balls.length; i++) {
  contador += balls[i].size;
}


var start = new Date().getTime();

function loop() {
  tragabola.draw();
  tragabola.update();

  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0, 0, width, height);

  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();


    if (balls[i].collisionDetect()) {
      // si devuelve true es que una bola ha chocado con el tragabola, pasamos el size
      // a cero
        balls.splice([i],1)
       // balls[i].size = 0;
    };
  }

  requestAnimationFrame(loop);
}

loop();