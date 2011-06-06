var Game = function() {}

Game.prototype.start = function(secret) {
	this.secret = secret;
	return 'Hello! Enter guess:';
}

Game.prototype.guess = function(guess) {
	var guessArr = String(guess).split('');
	var secret = String(this.secret).split('');
	
	var result = [];
	
	guessArr.forEach(function(el, index){		
		var index = secret.indexOf(el)
		if(index > -1) {
			if(secret[index] === guessArr[index]) {
				result.push('+');
			} else {
				result.push('-');
			}
			delete secret[index]
		}
	})
	
	result.sort(function(a, b){
		return a > b;
	})	
	
	if(guess === this.secret) {
		return 'Correct!'
	} else {
		return result.join('');
	}
}
exports.Game = Game
