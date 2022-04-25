// main.js
/** @type {HTMLCanvasElement} */ 
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  for (let  row = 0; row <= canvas.width; row += 50){
    for (let column = 0; column <= canvas.height; column += 50)
    {   
        ctx.moveTo(row, 0);
        ctx.lineTo(row, canvas.width); 
        ctx.moveTo(0, column);
        ctx.lineTo(canvas.height, column ); 
        ctx.stroke();}  }
}


  
function drawTreasure(){
    const Treasure = new Image();
    Treasure.src = "./images/treasure.png";
    Treasure.onload = () => ctx.drawImage(Treasure, 50, 50, 50, 50); 
} // drawTreasure()

 class Character{
    constructor(col, row){
        this.col = col;
        this.row = row;
        this.imageInstance = undefined;

    }
    moveUp(){
        this.row -= 1;
    }
    moveRight(){
        this.col += 1;
    } 
    moveDown() {
        this.row += 1;
    }
    moveLeft(){
        this.col -= 1;
    } 

    drawplayer(){
        this.imageInstance = new Image();
        this.imageInstance.src = "./images/character-down.png";
        this.imageInstance.onload = () => ctx.drawImage(this.imageInstance, 0, 0, 50, 50); 
    } // drawPlayer()
      


 }

const player = new Character(0,0);

function drawEverything(){
    //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.width);
    player.drawplayer();
    drawTreasure();
    drawGrid()
};

drawEverything();

window.addEventListener('keydown', (event) => {
    // Stop the default behavior (moving the screen to the left/up/right/down)
    event.preventDefault();
  
    // React based on the key pressed
    switch (event.key) {
      case "ArrowLeft":
        player.moveLeft()
        break;
      case "ArrowUp":
        player.moveUp()
        break;
      case "ArrowRight":
        player.moveRight();
        break;
      case "ArrowDown":
        player.moveDown();
        break;
    }
  });