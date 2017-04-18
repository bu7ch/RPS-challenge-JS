function Player(name) {
  this.name = name;
};
Player.prototype.picks = function(pick) {
return this.picks = pick;
};

function Game(player_1, player_2) {
  this.player_1 = player_1;
  this.player_2 = player_2;
};

Game.prototype.PAIR = {
  rock: {beats: 'scissors'},
  paper: {beats: 'rock'},
  scissors: {beats: 'paper'}
};

Game.prototype.winner = function(arguments) {
  if (this.PAIR[this.player_1.picks]['beats'] === this.player_2.pick) {
    return this.player_2;
  }else {
    return this.player_1;
  }
};
