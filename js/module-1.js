!function(){
	var person = window.person = {
		name: 'ry'
	}
	var ry = {
		age:18
	}
	window.ryup = function(){
		ry.age += 1
		return ry.age
	}
}.call()