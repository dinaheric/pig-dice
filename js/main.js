// -----BUSINESS LOGIC --------
function Names(name1, name2) {
    this.name1 = name1;
    this.name2 = name2;
  }
// This manipulates the form attribute in the html
  var pigGame = {
    player1Score: 0,
    player2Score: 0,
    playerUp: 1,
    turnScore: 0,
  };
// function for rolling the dice by calling the javascript math function which is inbuilt
  function dieRoll () {
    die1 = Math.floor(Math.random()*6) +1;
    return die1;
  }
// sequence loop and function to change the user turns and roll the dice as
// seen in the dieroll function above
  var playerRoll = function() {
    var roll = dieRoll();
    if(roll ===1){
      pigGame.turnScore = 0;
      alertEndTurn();
      switchPlayer();
    } else {
      pigGame.turnScore +=roll;
      if (pigGame.playerUp === 1) {
        if (pigGame.turnScore + pigGame.player1Score >= 21) {
          alertWinner(1);
        }
      } else if (pigGame.turnScore + pigGame.player2Score >= 21) {
        alertWinner(2);
    }
    }
    return roll;
  }

// records the result that the user is satisfied with
  function holdThePig() {
    var currentPlayer = pigGame.playerUp;
    if (currentPlayer ===1) {
      pigGame.player1Score += pigGame.turnScore;
    } else {
      pigGame.player2Score += pigGame.turnScore;
    }
    pigGame.turnScore = 0;
    switchPlayer();
  }
  
// function for switching the player
  function switchPlayer () {
    if (pigGame.playerUp === 1) {
      $("#player1Button").hide();
      $("#player2Button").show();
      pigGame.playerUp = 2;
  
    } else {
      $("#player2Button").hide();
      $("#player1Button").show();
      pigGame.playerUp = 1;
  
    }
  }
// function for resetting user scores
  function resetGame() {
    pigGame.player1Score = 0;
    pigGame.player2Score = 0;
    pigGame.playerUp = 1;
    pigGame.turnScore = 0;
  }
  

// ----USER LOGIC ---- (below)--------
  
  
  function alertEndTurn(){
    alert("Sorry - you rolled a 1.  Your score remains the same and your turn is over.");
    $(".playerStatus").text(pigGame.playerUp);
  }
  
  function alertWinner(playerNumber) {
    alert("Player " + playerNumber + " is the BIG winner!!");
    resetGame();
    $(".gameStatusDisplay").text(0);
  }
  
  $(document).ready(function() {
  
    $("form#pigForm").submit(function(event){
      var playerNameOne = $("input#playerNameOne").val();
      var playerNameTwo = $("input#playerNameTwo").val();
        $("span#playerNameOne").text(playerNameOne);
        $("span#playerNameTwo").text(playerNameTwo);
        $("#player2Button").hide();
        $("#player1Button").show();
        $(".playerStatus").text(pigGame.playerUp);
        event.preventDefault();
  
      var nameHolder = new Names(playerNameOne, playerNameTwo);
    })
  
  
    $(".rollPig").click(function() {
      pigResult = playerRoll();
      $(".rollResult").text(pigResult);
      $(".turnScore").text(pigGame.turnScore);
  
    });
  
    $(".holdPig").click(function(){
      holdThePig();
      $("rollResult").text("");
      $(".player1Score").text(pigGame.player1Score);
      $(".player2Score").text(pigGame.player2Score);
      $(".playerStatus").text(pigGame.playerUp);
    });
  });
  