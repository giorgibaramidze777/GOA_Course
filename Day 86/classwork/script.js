let day = document.getElementById('day')
let hr = document.getElementById('hr')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
let months = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
]

setInterval(function(){
    let date = new Date()
    console.log(months[date.getMonth()] - date.getDate())
    sec.textContent = 60 - date.getSeconds()
    min.textContent = 60 - date.getMinutes()
    hr.textContent = 24 - date.getHours()
    day.textContent = months[date.getMonth()] - date.getDate()
}, 1000)