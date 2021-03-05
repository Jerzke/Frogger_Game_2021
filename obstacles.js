class Obstacle{
   constructor(x, y, width, height, speed, type){
       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height;
       this.speed = speed;
       this.type = type;

   }
   draw(){
       ctx.fillStyle = 'red';
       ctx.fillRect(this.x, this.y, this.width, this.height);

   }
   update(){
      this.x += this.speed * gameSpeed;
       if (this.speed > 0){
       if (this.x > canvas.width + this.width){
           this.x = 0 - this.width;
       }
   } else {
       if(this.x < 0 - this.width + this.width){
           this.x = canvas.width;
       }
   }
}
}
function initObstacles(){
    //lane1
    for (let i = 0; i < 2; i++){
        let x = i * 350;
        carsArray.push(new Obstacle(x, canvas.height - grid * 2 - 20, grid * 2, grid, 1, 'car')) 
    };
}
//lane2
for (let i = 0; i < 2; i++){
    let x = i * 300;
    carsArray.push(new Obstacle(x, canvas.height - grid * 3 - 20, grid * 2, grid, -2, 'car'))
}
//lane 3

for(let i = 0; i < 2; i++){
    let x = i * 400;
    carsArray.push(new Obstacle(x, canvas.height - grid * 4 - 20, grid, grid, 2, 'car'))
}
//lane 4

for(let i = 0; i < 2; i++){
    let x = i * 400; 
    carsArray.push(new Obstacle(x, canvas.height - grid * 5 - 20, grid * 2, grid, -2, 'car'));
}
//lane 5
for(let i = 0; i < 3; i++){
    let x = i * 200;
    carsArray.push(new Obstacle(x, canvas.height - grid * 6 - 20, grid, grid, 1, 'car'));
}
initObstacles();

function handleObstacles(){
    for (let i = 0; i < carsArray.length; i++){
        carsArray[i].update();
        carsArray[i].draw();
    }
    for(let i = 0; i < logsArray.length; i++){
        logsArray[i].update();
        logsArray[i].draw();
    }
    //collision
    for (let i = 0; i < carsArray.length; i++){
    if(collision(frogger, carsArray[i])){
        resetGame();
    }
    }
}