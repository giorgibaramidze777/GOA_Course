let string = "aleksandre"

// String length
console.log(string.length) // 10, ითვლის სიმბოლოების რაოდენობას
// String charAt()
console.log(string.charAt(2)) // "e", გამოიტანს ამ შემთხვევაში სიმბოლოს, რომელიც არის 2 ინდექსზე, თუ 3 იქნება გამოიტანს სიმბოლოს მესამე ინდექსზე რომელიც დგას
// String concat()
console.log(string.concat("hello world")) // "aleksandrehello world", შეაერთებს ორ სტრინგს
// String at()
console.log(string.at(2)) // "e", იგივე რაც charAt()
// String slice()
console.log(string.slice(2, 7)) // "eksan", გამოიტანს სიმბოლოებს 2 დან 7 ინდექსამდე
// String toUpperCase()
console.log(string.toUpperCase()) // "ALEKSANDRE", დიდი ასოებით გამოიტანს
// String toLowerCase()
console.log(string.toLowerCase()) // "aleksandre", პატარა ასოებით გამოიტანს
// String trim()
string = "           aleksandre dzukaevi              "
console.log(string.trim()) // "aleksandre dzukaevi", წაუშლის სპეისებს
string =  "aleksandre" // კაი?
// String replace()
console.log(string.replace("a", "d")) // "dleksandre", შეცვლის პირველ "a"-ს "d"-ით
// String split()
string = "aleksandre dzukaevi" // :>
console.log(string.split(" ")) // [ 'aleksandre', 'dzukaevi' ], გახლიჩავცს სადაც სფეისია