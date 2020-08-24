

  var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number between 1 and 6

  var randDice1 = "images/dice" + randomNumber1 + ".png"; // images/dice1.png - images/dice6.png

  document.querySelector(".img1").setAttribute("src", randDice1); // Change image source


  var randomNumber2 = Math.floor(Math.random() * 6) + 1; // random number between 1 and 6

  var randDice2 = "images/dice" + randomNumber2 + ".png"; // dice1.png - dice6.png

  document.querySelector(".img2").setAttribute("src", randDice2); // Change image source


  // who wins?
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
  }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!"
  }
