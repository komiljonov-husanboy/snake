const playBoard = document.querySelector('.play__board');
let gameOver = false
let foodX, foodY;
let snakeBody =[]
let snakeX = 5, snakeY = 10;
let  velocityX = 0 , velocityY = 0;
let setIntervalId;

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver = () => {
    clearInterval(setIntervalId);
    alert("Game over ! press ok to replay...")
    location.reload();
}
const changeDirection = (e) => {
    //changing velocity value based on key press
    if (e.key ==="ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if(e.key ==="ArrowDown"&& velocityY != -1){
        velocityX = 0;
        velocityY = 1;
    }
    else if(e.key ==="ArrowLeft"&& velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    }
    else if(e.key ==="ArrowRight" && velocityX != 1){
        velocityX = 1;
        velocityY = 0;
    }




}

const initGame = () => {
    if (gameOver) return handleGameOver();
    let htmlMarkup = `<div class="food food-item" style="grid-area: ${foodY} / ${foodX}"></div>`;
  if (snakeX === foodX && snakeY === foodY) {
    changeFoodPosition()
    snakeBody.push([foodX,foodY]); // pushing food position  to snake body array
    console.log(snakeBody);
  }
for (let i = snakeBody.length - 1; i > 0; i--) { 
    //shifting forward the values of the elements in the snake body by one 
    snakeBody[i] = snakeBody[i - 1];  
}

  snakeBody[0] = [snakeX, snakeY];
  
    //Updating the snake's head position based ion the current velocity
    snakeX += velocityX;
    snakeY += velocityY
    if (snakeX <= 0  || snakeX > 30|| snakeY <= 0  || snakeY >30 ) {
    gameOver = true;
    }
    for (let i = 0; i < snakeBody.length; i++) {
        //Adding  a div for each of the snake's body
        htmlMarkup += `<div class="head " style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
    
    // if (!== && snakeBody[ 1]) {
        
    // }
    }
    
    playBoard.innerHTML = htmlMarkup;
}

changeFoodPosition();
setIntervalId = setInterval(initGame , 125);
document.addEventListener("keydown" , changeDirection);