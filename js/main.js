// -----BUSINESS LOGIC --------
function Names(name1, name2) {
    this.name1 = name1;
    this.name2 = name2;
  }
// This manipulates the form attribute in the html
  var pigGame = {
    playerOneScore: 0,
    playerTwoScore: 0,
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
        if (pigGame.turnScore + pigGame.playerOneScore >= 21) {
          alertWinner(1);
        }
      } else if (pigGame.turnScore + pigGame.playerTwoScore >= 21) {
        alertWinner(2);
    }
    }
    return roll;
  }

// records the result that the user is satisfied with
  function holdThePig() {
    var currentPlayer = pigGame.playerUp;
    if (currentPlayer ===1) {
      pigGame.playerOneScore += pigGame.turnScore;
    } else {
      pigGame.playerTwoScore += pigGame.turnScore;
    }
    pigGame.turnScore = 0;
    switchPlayer();
  }
  
// function for switching the player
  function switchPlayer () {
    if (pigGame.playerUp === 1) {
      $("#playerOneButton").hide();
      $("#playerTwoButton").show();
      pigGame.playerUp = 2;
  
    } else {
      $("#playerTwoButton").hide();
      $("#playerOneButton").show();
      pigGame.playerUp = 1;
  
    }
  }
// function for resetting user scores
  function resetGame() {
    pigGame.playerOneScore = 0;
    pigGame.playerTwoScore = 0;
    pigGame.playerUp = 1;
    pigGame.turnScore = 0;
  }
  

// ----USER LOGIC ---- (below)--------
  
  // show javascript alert when one rolls the dice more than once or scores a one
  function alertEndTurn(){
    alert("Sorry - you rolled a 1.  Your score remains the same and your turn is over.");
    $(".playerStatus").text(pigGame.playerUp);
  }
  // shows a javascript alert box on the browser with who has won the game
  function alertWinner(playerNumber) {
    alert("Player " + playerNumber + " is the winner!!");
    resetGame();
    $(".gameStatusDisplay").text(0);
  }
  
  $(document).ready(function() {
  // submit values to the forms
    $("form#pigForm").submit(function(event){
      var playerNameOne = $("input#playerNameOne").val();
      var playerNameTwo = $("input#playerNameTwo").val();
        $("span#playerNameOne").text(playerNameOne);
        $("span#playerNameTwo").text(playerNameTwo);
        $("#playerTwoButton").hide();
        $("#playerOneButton").show();
        $(".playerStatus").text(pigGame.playerUp);
        event.preventDefault();
  // append playernames to the display div
      var nameHolder = new Names(playerNameOne, playerNameTwo);
    })
  
  // this code rolls the dice to give a random number that doesn't exceed 6
    $(".rollPig").click(function() {
      pigResult = playerRoll();
      $(".rollResult").text(pigResult);
      $(".turnScore").text(pigGame.turnScore);
  
    });
  //Record the player dice roll result and pass the chance to the next user
    $(".holdPig").click(function(){
      holdThePig();
      $("rollResult").text("");
      $(".playerOneScore").text(pigGame.playerOneScore);
      $(".playerTwoScore").text(pigGame.playerTwoScore);
      $(".playerStatus").text(pigGame.playerUp);
    });
  });
  