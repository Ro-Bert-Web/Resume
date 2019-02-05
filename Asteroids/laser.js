class laser{
 constructor(x,y,angle){
  this.alive = true;
  this.x = x;
  this.y = y;
  this.angle = angle;
  this.speed = 1;
  this.size = 1;
 }

 move(){
  this.x += Math.cos(this.angle) * this.speed;
  this.y += Math.sin(this.angle) * this.speed;
 }

 wrap(){
  this.alive = (this.x>0 && this.x<300 && this.y>0 && this.y<150);
 }

 draw(){
  canvas.beginPath();
  canvas.strokeStyle = "#00ff00";
  canvas.rect(this.x - this.size / 2,this.y - this.size / 2,this.size,this.size);
  canvas.stroke();
 }
}
