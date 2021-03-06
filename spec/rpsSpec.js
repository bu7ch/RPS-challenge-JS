describe('Rock-Paper-Scissors::', function() {
  var player_1, player_2, game;

  beforeEach(function () {
    player_1 = new Player('roro');
    player_2 = new Player('billy');
    game = new Game(player_1, player_2);
  });

  describe("winner & loser", function () {

    describe('rock', function() {
      it("should beat scissors", function () {
        player_1.picks('rock');
        player_2.picks('scissors');
        expect(game.winner()).toBe(player_1);
      });
      it('should lose to paper', function() {
        player_1.picks('rock');
        player_2.picks('paper');
        expect(game.winner()).toBe(player_2);
      });
    });
    describe('paper', function() {
      it('should beat rock', function() {
        player_1.picks('paper');
        player_2.picks('rock');
        expect(game.winner()).toBe(player_1);
      });
      it('should lose to scissors', function() {
        player_1.picks('paper');
        player_2.picks('scissors');
        expect(game.winner()).toBe(player_2);
      });
    });
  });
  describe('scissors', function() {
      it('should beat paper', function() {
        player_1.picks('scissors');
        player_2.picks('paper');
        expect(game.winner()).toBe(player_1);
      });
      it('should lose to rock', function() {
        player_1.picks('scissors');
        player_2.picks('rock');
        expect(game.winner()).toBe(player_2);
      });
    });
    describe('draws', function() {
      describe('any identical picks', function() {
        it('should result in no winner', function() {
          var drawGameResults = ['rock', 'paper', 'scissors'].map(function(x) {
            player_1.picks(x);
            player_2.picks(x);
            return game.winner();
          });
          expect(drawGameResults).toEqual([null, null, null]);
        });
      });
    });
});
