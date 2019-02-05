function fromMatrix(m1){
	let result = [
		m1[0][0],
		m1[1][0],
		m1[2][0]
	];
	return result;
}

function mag(v1){
	let result = Math.sqrt(v1[0] * v1[0] + v1[1] * v1[1] + v1[2] * v1[2]);
	return result;
}

function scale(v1, scale){
	let result = [];
	for(let i = 0; i < v1.length; i++){
		result.push(v1[i] * scale);
	}
	return result;
}

function cross(v1, v2){
	let result = [];
	result.push(v1[1] * v2[2] - v1[2] * v2[1]);
	result.push(v1[2] * v2[0] - v1[0] * v2[2]);
	result.push(v1[0] * v2[1] - v1[1] * v2[0]);
	return result;
}

function dot(v1, v2){
	let result = 0;
	for(let i = 0; i < v1.length; i++){
		result += v1[i] * v2[i];
	}
	return result;
}

function add(v1, v2){
	let result = [];
	for(let i = 0; i < v1.length; i++){
		result.push(v1[i] + v2[i]);
	}
	return result;
}

function sub(v1, v2){
	let result = [];
	for(let i = 0; i < v1.length; i++){
		result.push(v1[i] - v2[i]);
	}
	return result;
}
