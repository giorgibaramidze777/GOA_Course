let main3 = document.getElementById("main3")
let count = 0
let completed = document.getElementById("completed")
let completedunia = document.getElementById("completedunia")
let active = document.getElementById("active")
let ul = document.getElementById("ul")
let eich = document.getElementById("eich")


let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May", 
    "Jun",
    "Jul",
    "Aug", 
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]

let date = new Date()
let day = date.getDate()
let both = month[date.getMonth()] + " " + day
eich.textContent = both 

document.getElementById("add").onclick = function AddTask() {
    
    let input = document.getElementById("input")
    if (input.value == '') {
        alert("You Must Write Something!")
        return
    }
    let ul = document.getElementById("ul")
    let li = document.createElement("li")
    li.textContent = input.value
    ul.appendChild(li)
    let img = document.createElement("img")
    img.src = "remove.png"
    img.onclick = function () {
        li.remove()
    }
    img.style.cursor = "pointer"
    li.appendChild(img)
    li.style.cursor = "pointer"
    li.onclick = function changeColor() {
        count++
        if (count == 1) {
            li.style.textDecoration = "line-through solid 2px grey"
            li.style.color = "grey"
        }
        else if (count == 2) {
            li.style.textDecoration = "none"
            li.style.color = "white"
            count = 0
            completedunia.appendChild(li)
            completedunia.style.display = "none"
            // li.style.display = "none"
        }
    }
    input.value = ''
}

document.getElementById("completed").onclick = function addToCompleted() {
    completedunia.style.display = "block"
    ul.style.display = "none"
    completed.style.color = "cyan"
    active.style.color = "lightblue"
}

active.onclick = function kuka() {
    ul.style.display = "block"
    completedunia.style.display = "none"
    active.style.color = "cyan"
    completed.style.color = "lightblue"
}