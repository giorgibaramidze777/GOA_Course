let img = document.getElementById("ekkoImage")
let click = document.getElementById("button")

let l = ['image.png', 'image2.png', 'image3.png', 'image4.png', 'image5.png'];

click.onclick = function() {
    img.src = l[Math.floor(Math.random() * l.length)];
}

// let lst = ['image.png', 'image2.png', 'image3.png', 'image4.png', 'image5.png'];

// let ekkoImage = document.getElementById('ekkoImage');

// ekkoImage.src = lst[Math.floor(Math.random() * lst.length)+1];