let aboba = prompt("Enter: ");

if (aboba > 50) {
    console.log("big");
} else if (aboba < 50 && aboba > 25) {
    console.log("mid");
} else {
    console.log("you've small pp");
}

aboba > 50 ? console.log("big") : aboba < 50 && aboba > 25 ? console.log("mid") : console.log("you've small pp");

switch (true) {
    case aboba > 50:
        console.log("big");
        break;
    case aboba < 50 && aboba > 25:
        console.log("mid");
        break;
    default:
        console.log("you've small pp");
}