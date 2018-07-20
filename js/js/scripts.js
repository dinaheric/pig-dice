//back-end
function Names(name1, name2) {
  this.name1 = name1;
  this.name2 = name2;
}
Name.prototype.fullName = function() { return this.name1 + " " + this.name2;

}
var pigGame = {
  player1Score: 0,
  player2Score: 0,
  playerUp: 1,
  turnScore: 0,
}

//front-end
$(document).ready(function() {
 $("form#new-name").submit(function(event) {
     event.preventDefault();
     var InputtedName1 = $("input#new-name1").val();
     var InputtedName2 = $("input#new-name2").val();
     var newName = new Name(InputtedName1,InputtedName2);
     $("#names").append("<li><span class ='contact'>" + newName.fullName() + "</span></li>")
     $(".contact").last().click(function() {
      $("#show-name").show();
      $("#show-name h2").text(newName.firstName);
      $(".name1").text(newName.Name1);
      $(".name2").text(newName.Name2);
    });
     $("input#new-name1").val("");
     $("input#new-name2").val("");
  }); 
})

