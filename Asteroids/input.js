let bShooting = false;

document.onkeydown = function(event){
 let key = event.keyCode;
 if(key==37){
  myShip.rotateLeft();
 }
 else if(key==39){
  myShip.rotateRight();
 }

 if(key==38){
  bShipThrusters = true;
 }

 if(key==40 && bShooting==false){
  bShooting = true;
  myShip.shoot();
 }

 if(key==13){
  myShip.start();
 }
}

document.onkeyup = function(event){
 let key = event.keyCode;
 if(key==37 || key==39){
  myShip.rotateStop();
 }

 if(key==38){
  bShipThrusters = false;
 }

 if(key==40){
  bShooting = false;
 }
}
