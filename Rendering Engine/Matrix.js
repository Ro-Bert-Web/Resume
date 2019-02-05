function fromVector(v1){
	let result = [
		[v1[0]],
		[v1[1]],
		[v1[2]]
	];
	return result;
}

function scaleMatrix(m1, scale){
	let result = [];
	for(let i = 0; i < m1.length; i++){
		let row = [];
		for(let j = 0; j < m1[i].length; j++){
			row.push(m1[i][j] * scale);
		}
		result.push(row);
	}
	return result;
}

function addMatrix(m1, m2){
	let result = [];
	for(let i = 0; i < m1.length; i++){
		let row = [];
		for(let j = 0; j < m1[i].length; j++){
			row.push(m1[i][j] + m2[i][j]);
		}
		result.push(row);
	}
	return result;
}

function multMatrix(m1, m2){
	let result = [];
	for(let i = 0; i < m1.length; i++){
		let row = [];
		for(let j = 0; j < m2[0].length; j++){
			let val = 0;
			for(let a = 0; a < m1[0].length; a++){
				val += m1[i][a] * m2[a][j];
			}
			row.push(val);
		}
		result.push(row);
	}
	return result;
}
