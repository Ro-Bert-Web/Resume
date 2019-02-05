let light = [500, 1000, 0];
let ambient = 0.1;

//Function for taking r, g, & b values and returning a color code string
function rgb(r, g, b){
	r = Math.floor(Math.max(Math.min(r, 255), 0)).toString(16);
	b = Math.floor(Math.max(Math.min(b, 255), 0)).toString(16);
	g = Math.floor(Math.max(Math.min(g, 255), 0)).toString(16);
	let result = "#" + ("00" + r).substring(r.length) + ("00" + g).substring(g.length) + ("00" + b).substring(b.length);
	return result;
}

//Projects a vector to the screen and returns it
function VS(vrtx){
	let result = {
		pxlX : 1700 * vrtx[0] / vrtx[2],
		pxlY : 1700 * vrtx[1] / vrtx[2],
		vrtx : vrtx
	};
	return result;
}

//Draws a group of vectors to the screen
function PS(group, ctx){
	let gradient = cross(sub(group.v2.vrtx, group.v1.vrtx), sub(group.v3.vrtx, group.v1.vrtx));
	if(mag(gradient) == 0){
		return;
	}
	let angle = Math.acos(dot(gradient, group.v1.vrtx) / mag(gradient) / mag(group.v1.vrtx));
	let angleToLight = Math.acos(dot(gradient, sub(group.v1.vrtx, light)) / mag(gradient) / mag(sub(group.v1.vrtx, light)));
	let shineGradient = add(scale(sub(group.v1.vrtx, light), 1 / mag(sub(group.v1.vrtx, light))), scale(group.v1.vrtx, 1 / mag(group.v1.vrtx)));
	shineGradient = scale(shineGradient, 1 / mag(shineGradient));
	let angleToShine = Math.acos(dot(gradient, shineGradient) / mag(gradient));

	if(angle < Math.PI / 2){
		let shade = Math.min(Math.cos(angleToLight) / 2 + 0.5 + ambient, 1);
		let shine = Math.pow(Math.cos(angleToShine) / 2 + 0.5, group.hard) * group.stren;
		let brightness = shade + shine;
		ctx.beginPath();
		ctx.fillStyle = rgb(group.color[0] * brightness, group.color[1] * brightness, group.color[2] * brightness);
		ctx.strokeStyle = ctx.fillStyle;
		ctx.moveTo(group.v3.pxlX, -group.v3.pxlY);
		ctx.lineTo(group.v1.pxlX, -group.v1.pxlY);
		ctx.lineTo(group.v2.pxlX, -group.v2.pxlY);
		ctx.lineTo(group.v3.pxlX, -group.v3.pxlY);
		ctx.fill();
		ctx.stroke();
	}
}
