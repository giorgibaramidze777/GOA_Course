// 1)
let n = parseInt(prompt("შეიყვანეთ მთელი რიცხვი n:"))
let sum = 0

for (let i = 1; i <= n; i++) {
  sum += i
}

console.log(`1-დან ${n}-მდე რიცხვების ჯამი არის: ${sum}`)

// 2)
const password = "1234"
let userInput = prompt("შეიყვანეთ პაროლი:")

while (userInput !== password) {
  userInput = prompt("არასწორი პაროლია, სცადეთ თავიდან:")
}

console.log("პაროლი სწორია! წვდომა დაშვებულია.")

// 3)
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}