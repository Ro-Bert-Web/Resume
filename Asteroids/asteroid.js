class asteroid{
 createShape(){
  this.vrtx = [];
  for(let i = 0; i<this.size * 3; i++){
   let newPoint = this.size * (1 + (Math.random() - 0.5)/3);
   this.vrtx.push(newPoint);
  }
 }

 constructor(x,y,size){
  this.alive = true;
  this.x = x;
  this.y = y;
  this.size = size;
  this.createShape();
  this.angle = Math.random() * Math.PI * 2;
  this.speed = Math.random() / 3 + 0.1;
  if(this.size<3){
   this.alive = false;
  }
 }

 collide(){
  let distance = Math.sqrt(Math.pow(this.x - myShip.x,2) + Math.pow(this.y - myShip.y,2));
  if(distance * 2<this.size + myShip.size){
   this.alive = false;
   myShip.health -= 1;
  }
 }

 shot(checkLaser){
  let distance = Math.sqrt(Math.pow(this.x - checkLaser.x,2) + Math.pow(this.y - checkLaser.y,2));
  if(distance * 2<this.size + checkLaser.size){
   this.alive = false;
   checkLaser.alive = false;
   createAsteroid(this.x,this.y,this.size / 1.5);
   createAsteroid(this.x,this.y,this.size / 1.5);
   score += 1;
  }
 }

 wrap(){
  if(this.x<0){
   this.x = 300;
  }
  else if(this.x>300){
   this.x = 0;
  }
  if(this.y<0){
   this.y = 150;
  }
  else if(this.y>150){
   this.y = 0;
  }
 }

 move(){
  this.x += Math.cos(this.angle) * this.speed;
  this.y += Math.sin(this.angle) * this.speed;
  this.wrap();
 }

 draw(){
  canvas.beginPath();
  canvas.strokeStyle = "#00ff00";
  let rotIndex = Math.PI * 2 / this.vrtx.length;
  let xCoor = this.x + Math.cos(rotIndex * (this.vrtx.length - 1)) * this.vrtx[this.vrtx.length - 1];
  let yCoor = this.y + Math.sin(rotIndex * (this.vrtx.length - 1)) * this.vrtx[this.vrtx.length - 1];
  canvas.moveTo(xCoor,yCoor);
  for(let i = 0; i<this.vrtx.length; i++){
   let xCoor = this.x + Math.cos(rotIndex * i) * this.vrtx[i];
   let yCoor = this.y + Math.sin(rotIndex * i) * this.vrtx[i];
   canvas.lineTo(xCoor,yCoor);
  }
  canvas.stroke();
 }
}

function createAsteroid(x,y,size){
 let newAsteroid = new asteroid(x,y,size);
 newAsteroids.push(newAsteroid);
}
