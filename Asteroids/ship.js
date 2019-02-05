class ship{
 constructor(x = 150, y = 75){
  this.health = 0;

  this.x = x;
  this.y = y;
  this.angle = 0;

  this.vertex = 0.3;
  this.size = 10;

  this.thrust = 0.01;
  this.maxThrust = 0.75;
  this.rotSpeed = 0.05;

  this.xVel = 0;
  this.yVel = 0;
  this.rot = 0;

  this.drag = 0.99;
 }

 start(){
  if(this.health<=0){
   this.health = 5;
   asterGoal = 10;
   score = 0;
  }
 }

//////////////////////////////Shoot//////////////////////////////
 shoot(){
  let newLaser = new laser(this.x,this.y,this.angle);
  lasers.push(newLaser);
 }

//////////////////////////////Rotation//////////////////////////////
 rotateLeft(){
  this.rot = -this.rotSpeed;
 }

 rotateStop(){
  this.rot = 0;
 }

 rotateRight(){
  this.rot = this.rotSpeed;
 }

 rotate(){
  this.angle += this.rot;
 }

//////////////////////////////Thrust//////////////////////////////
 thrusters(){
  if(bShipThrusters==true){
   this.xVel += Math.cos(this.angle) * this.thrust;
   this.yVel += Math.sin(this.angle) * this.thrust;
   let force = Math.sqrt(this.xVel ** 2 + this.yVel ** 2);
   if(force > this.maxThrush){
    this.xVel = this.xVel * this.maxThrust / force;
    this.yVel = this.yVel * this.maxThrush / force;
   }
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
  this.thrusters();
  this.x += this.xVel;
  this.y += this.yVel;
  this.xVel *= this.drag;
  this.yVel *= this.drag;
  this.wrap();
 }

//////////////////////////////Draw//////////////////////////////
 draw(){
  canvas.beginPath();
  canvas.strokeStyle = "#00ff00";
  canvas.moveTo(this.x,this.y);
  canvas.lineTo(this.x - Math.cos(this.angle - this.vertex) * this.size,this.y - Math.sin(this.angle - this.vertex) * this.size);
  canvas.lineTo(this.x - Math.cos(this.angle + this.vertex) * this.size,this.y - Math.sin(this.angle + this.vertex) * this.size);
  canvas.lineTo(this.x,this.y);
  canvas.stroke();
 }
}

let myShip = new ship();

