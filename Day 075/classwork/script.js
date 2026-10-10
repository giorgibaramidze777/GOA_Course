let left = document.getElementById("left")
let img = document.getElementById("img")
let right = document.getElementById("right")

let imgs = [
    "image.png",
    "image copy.png",
    "image copy 2.png",
    "image copy 3.png",
    "image copy 4.png"
]

let count = 0
right.onclick = function(){
    img.src = imgs[count]
    if (count > 5){
        count = 0
    }else {
        count++
    }

}

left.onclick = function(){
    img.src = imgs[count]
    if (count < 0){
        count = 0
    }else {
        count--
    }
}