let paper = document.getElementsByClassName('paper')[0]
let scissors = document.getElementsByClassName('scissors')[0]
let rock = document.getElementsByClassName('rock')[0]
const dict = {
    rock: 'scissors',   
    scissors: 'paper',
    paper: 'rock'
}
let count = 0
let botCount = 0
paper.onclick = function() {
    let gg = 'paper'
    let bot = ['rock', 'paper', 'scissors'][Math.floor(Math.random()*3)]
    if (bot === dict[gg]) {
       count++
       document.getElementById('score').textContent = count
    } else if (gg === dict[bot]) {
        botCount++
        document.getElementById('scoreBot').textContent = botCount
    }

    document.getElementById('sp').textContent = bot
}

rock.onclick = function() {
    let gg = 'rock'
    let bot = ['rock', 'paper', 'scissors'][Math.floor(Math.random()*3)]
    if (bot === dict[gg]) {
       count++
       document.getElementById('score').textContent = count
    } else if (gg === dict[bot]) {
        botCount++
        document.getElementById('scoreBot').textContent = botCount
    }

    document.getElementById('sp').textContent = bot
}

scissors.onclick = function() {
    let gg = 'scissors'
    let bot = ['rock', 'paper', 'scissors'][Math.floor(Math.random()*3)]
    if (bot === dict[gg]) {
       count++
       document.getElementById('score').textContent = count
    } else if (gg === dict[bot]) {
        botCount++
        document.getElementById('scoreBot').textContent = botCount
    }

    document.getElementById('sp').textContent = bot
}