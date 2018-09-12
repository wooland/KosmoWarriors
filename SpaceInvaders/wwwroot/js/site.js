

//Globala variabler is the shit!
var playerOne;
var playerTwo;
var enemyMiniboss;

function InitGame() {

    //Skapa canvas och context
    myGameSky.start();

    //Bild för player1
    var imgPlayer1 = new Image();
    imgPlayer1.src = 'images/Sprites/Player.png';

    //skapa player1
    playerOne = new airplane(30, 30, imgPlayer1, 10, 120);
}

var myGameSky = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 800;
        this.canvas.height = 600;
        this.canvas.style.border = "thick solid black";
        this.canvas.style.margin = "auto";
        this.canvas.tabIndex = "1";
        document.getElementById("gameSpace").appendChild(this.canvas);
        this.context = this.canvas.getContext('2d');

        this.context.fillStyle = "lightblue";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.interval = setInterval(updateGameArea, 20);


        window.addEventListener('keydown', function (e) {
            myGameSky.keys = (myGameSky.keys || []);
            myGameSky.keys[e.keyCode] = true;
            console.log(myGameSky.keys);
        });

        window.addEventListener('keyup', function (e) {
            myGameSky.keys[e.keyCode] = false;
        });

    },
    update: function () {
        this.context = this.canvas.getContext('2d');

        this.context.fillStyle = "lightblue";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

};

function updateGameArea() {

    myGameSky.clear();
    myGameSky.update();
    playerOne.speedX = 0;
    playerOne.speedY = 0;
    if (myGameSky.keys && myGameSky.keys[37]) { playerOne.speedX = -1; }
    if (myGameSky.keys && myGameSky.keys[39]) { playerOne.speedX = 1; }
    if (myGameSky.keys && myGameSky.keys[38]) { playerOne.speedY = -1; }
    if (myGameSky.keys && myGameSky.keys[40]) { playerOne.speedY = 1; }
    playerOne.newPos();
    playerOne.update();
}

function airplane(width, height, image, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    ctx = myGameSky.context;

    image.onload = function () {
        ctx.drawImage(image, x, y);
    };
    this.update = function () {
        image.onload = function () {
            ctx.drawImage(image, x, y);
        };
    };
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
    };
}

function bullet(width, height, image, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    ctx = myGameSky.context;

    image.onload = function () {
        ctx.drawImage(image, x, y);
    };
    this.update = function () {
        image.onload = function () {
            ctx.drawImage(image, x, y);
        };
    };
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
    };
}
