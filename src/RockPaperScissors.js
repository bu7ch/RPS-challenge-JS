function Player(name) {
  this.name = name;
};
Player.prototype.picks = function(pick) {
return this.pick = pick;
};

function Game(player_1, player_2) {
  this.player_1 = player_1;
  this.player_2 = player_2;
};

Game.prototype.PAIRS = {
	rock: {beats: 'scissors'},
	paper: {beats: 'rock'},
	scissors: {beats: 'paper'}
};

Game.prototype.winner = function() {
	if (this.PAIRS[this.player_1.pick]['beats'] === this.player_2.pick) {
		return this.player_1;
	} else {
		return this.player_2;
	}
};
