function clear(){
 canvas.beginPath();
 canvas.fillStyle = "#0f0020";
 canvas.rect(0,0,300,150);
 canvas.fill();
}

function killOff(){
 for(let i = 0; i<lasers.length; i++){
  if(lasers[i].alive==true){
   newLasers.push(lasers[i]);
  }
 }

 for(let i = 0; i<asteroids.length; i++){
  if(asteroids[i].alive==true){
   newAsteroids.push(asteroids[i]);
  }
 }

 lasers = newLasers;
 asteroids = newAsteroids;
 newLasers = [];
 newAsteroids = [];
}

function update(){
 clear();

 let lives = [];
 for(let i = 0; i<myShip.health; i++){
  lives.push(new ship(i * 7 + 5, 2));
  lives[i].angle = -Math.PI / 2;
  lives[i].draw();
 }

 myShip.rotate();
 myShip.move();
 myShip.draw();

 if(myShip.health<=0){
  asterGoal = 0;
 }
 for(let i = 0; i<lasers.length; i++){
  lasers[i].move();
  lasers[i].draw();
  lasers[i].wrap();
 }

 if(asteroids.length<asterGoal){
  createAsteroid(Math.random() * 300,Math.random() * 150,Math.random() * 10 + 3);
 }

 for(let i = 0; i<asteroids.length; i++){
  asteroids[i].move();
  asteroids[i].draw();
  asteroids[i].collide();
  for(let j = 0; j<lasers.length; j++){
   asteroids[i].shot(lasers[j]);
  }
  if(myShip.health<=0){
   asteroids[i].alive = false;
  }
 }
 canvas.fillStyle = "#00ff00";
 canvas.fillText(score,250,10);
 killOff();
}

let running = setInterval("update()",10);
