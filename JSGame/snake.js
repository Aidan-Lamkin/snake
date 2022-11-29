//Game board details
var cellSize = 25;
var rows = 20;
var columns = 20;
var gameBoard;
var ctx;

//initial snake position
var snakeHeadX = cellSize * 5;
var snakeHeadY = cellSize * 5;

//food position
var foodX;
var foodY;

//initial snake movement (starts still)
var xDirection = 0;
var yDirection = 0;

//array to hold body of snake (seperate from head)
var body = [];

//bool to track if game is over
var gameOver = false;
var start = true;

//score tracker
var score = 0;


window.onload = function() {
    //get canvas by id
    gameBoard = document.getElementById("game");
    //determine size and context
    gameBoard.width = columns * cellSize;
    gameBoard.height = rows * cellSize;
    ctx = gameBoard.getContext("2d");

    //spawn the first food at random
    spawnFood();
    //key input listener
    document.addEventListener("keyup", move);

    //update function that is called every 100 mill (can adjust to move faster or slower)
    setInterval(update, 1000/10);
}

function update(){
    if(start){
        //display score
        document.getElementById("scoreValue").innerHTML = score;
        //if game is over return
        if(gameOver){
            score = 0;
            start = false;
            reset();
        }

        //draw background
        ctx.fillStyle="black";
        ctx.fillRect(0,0 ,gameBoard.width, gameBoard.height);

        //draw food
        ctx.fillStyle="red";
        ctx.fillRect(foodX,foodY ,cellSize, cellSize);

        //check to see if snake ate food
        if (snakeHeadX == foodX && snakeHeadY == foodY){
            //if so add to body and spawn more food
            body.push([foodX, foodY]);
            score += 1;
            spawnFood();
        }

        //increment body forward
        for(let i = body.length - 1; i > 0; i--){
            body[i] = body[i - 1];
        }
        if(body.length){
            body[0] = [snakeHeadX, snakeHeadY];
        }

        //draw snake head
        ctx.fillStyle="green";
        snakeHeadX += xDirection * cellSize;
        snakeHeadY += yDirection * cellSize;
        ctx.fillRect(snakeHeadX, snakeHeadY, cellSize, cellSize);

        //draw snake body
        for(let i = 0; i < body.length; i++){
            ctx.fillRect(body[i][0], body[i][1], cellSize, cellSize);
        }

        //if snake goes out of bounds or loops onself you lose
        if(!gameOver && snakeHeadX < 0 || snakeHeadX > columns * cellSize || snakeHeadY > rows * cellSize || snakeHeadY < 0){
            gameOver = true;
        }

        for(let i = 0; i < body.length; i++){
            if(!gameOver && snakeHeadX == body[i][0] && snakeHeadY == body[i][1]){
                gameOver = true;
            }
        }
    }
}

//sets food to random x and y
function spawnFood() {
    foodX = Math.floor(Math.random() * columns) * cellSize;
    foodY = Math.floor(Math.random() * rows) * cellSize;
}

//key inputs change direction and check to not fold on yourself
function move(e) {
    if(e.code == "ArrowUp" && yDirection != 1){
        xDirection = 0;
        yDirection = -1;
    }
    else if(e.code == "ArrowDown" && yDirection != -1){
        xDirection = 0;
        yDirection = 1;
    }
    else if(e.code == "ArrowLeft" && xDirection != 1){
        xDirection = -1;
        yDirection = 0;
    }
    else if(e.code == "ArrowRight" && xDirection != -1){
        xDirection = 1;
        yDirection = 0;
    }
    //only allow new game if game is over
    else if(e.code == "Enter" && gameOver){
        start = true;
        gameOver = false;
    }
}

//resets values after game
function reset(){
    snakeHeadX = cellSize * 5;
    snakeHeadY = cellSize * 5;

    xDirection = 0;
    yDirection = 0;

    body = [];

    score = 0;
}