//business logic
function Games(one, two) {
  this.playerOne = one;
  this.playerTwo = two;
}

// user interface logic
$(document).ready(function() {
  $("form#new-game").submit(function(event) {
    event.preventDefault();

    var inputtedplayerOne = $("input#new-player-one").val();
    var inputtedplayerTwo = $("input#new-player-two").val();

    var newGame = new Game(inputtedPLayerOne, inputtedPLayerTwo);

    $("ul#games").append("<li><span class='game'>" + newGame.playerOne + "</span></li>");

    $("input#new-player-one").val("");
    $("input#new-player-two").val("");
  });
});
