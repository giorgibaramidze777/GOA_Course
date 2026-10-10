let child2 = document.getElementById("child2")
let child3 = document.getElementById("child3")
let Player1scores = document.getElementById("h1")
let Player2scores = document.getElementById("h2")
let start = document.getElementById("child7") 
let circle = document.getElementsByClassName("circle")
let boolean = true
let circle2 = document.getElementsByClassName("circle2")
let result = document.getElementById("result") 
let count1 = 0
let count2 = 0

start.onclick = function() {
  if (boolean == true) {

    let random1 = Math.floor(Math.random() * 6)
    let random2 = Math.floor(Math.random() * 6)

    let dice1 = random1 + 1;
    let dice2 = random2 + 1;

    console.log(`Player 1 rolled: ${dice1}, Player 2 rolled: ${dice2}`);

    for (let i = 0; i < 6; i++) {
        circle[i].style.display = "none"
    }

    for (let i = 0; i < 6; i++) {
        circle2[i].style.display = "none"
    }

    for (let i = 0; i < dice1; i++) {
        circle[i].style.display = "block"
    }
    
    for (let i = 0; i < dice2; i++) {
        circle2[i].style.display = "block"
    }
    
    if (dice1 > dice2) {
      count1++
      result.textContent = "Player 1 Wins!"
      Player1scores.textContent = count1
    } else if (dice2 > dice1) {
      count2++
      result.textContent = "Player 2 Wins!"
      Player2scores.textContent = count2
    } else {
      result.textContent = "Draw"
    }
  }
}