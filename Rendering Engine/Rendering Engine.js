class projection{
	constructor(width = window.innerWidth - 20, height = window.innerHeight - 20){
		this.canvas = document.createElement("CANVAS");	
		this.canvas.width = width;
		this.canvas.height = height;
		document.body.appendChild(this.canvas);
		this.ctx = this.canvas.getContext("2d");
		this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
	}
	loadShaders(VS, PS){
		this.VS = VS;
		this.PS = PS;
	}
	clear(color = "#ffffff"){
		this.ctx.beginPath();
		this.ctx.fillStyle = color;
		this.ctx.strokeStyle = "#000000";
		this.ctx.rect(-this.canvas.width / 2, -this.canvas.height / 2, this.canvas.width, this.canvas.height);
		this.ctx.fill();
		this.ctx.stroke();
	}
	draw(vrtx, groups){
		for(let i = 0; i < groups.length; i++){
			let group = {
				v1 : this.VS(vrtx[groups[i][0]]),
				v2 : this.VS(vrtx[groups[i][1]]),
				v3 : this.VS(vrtx[groups[i][2]]),
				color : groups[i][3],
				hard : groups[i][4],
				stren : groups[i][5]
			};
			this.PS(group, this.ctx);
		}
	}
}
