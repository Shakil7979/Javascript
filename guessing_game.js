

var guessOfwon = 0;
var guessOflost = 0;

for (var i = 1; i < 6; i++) {
  var GussNumber = parseInt(prompt("Enter your guess number in 1-5 : "));
  var randomNumber = Math.floor(Math.random() * 5) + 1;

  if (GussNumber == randomNumber) {
    console.log("Your have won");
    guessOfwon++;
  } else {
    console.log("You have lost" + randomNumber);
    guessOflost++;
  }
}

document.write("total you win the game : " + guessOfwon + "<br>");
document.write("total you lost the game : " + guessOflost);



