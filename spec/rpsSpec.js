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
    });
  });
});