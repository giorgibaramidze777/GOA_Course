// 1)
// მომხმარებელს შემოატანინე ნებისმიერი რიცხვი.
// გამოიტანე:

// მისი მოდული (უარყოფითი თუ არის, გახდეს დადებითი)
// მისი დამრგვალებული მნიშვნელობა (უახლოეს მთელ რიცხვამდე)
let user = prompt('enter diddy blud')
console.log(Math.abs(Math.round(user)))
// 2)
// გაქვს რიცხვების სია.
// იპოვე:

// ყველაზე დიდი რიცხვი
// ყველაზე პატარა რიცხვი
console.log(Math.max(1, 312, 634, 10384977628348234, 0.23491, 12.9274, 13))
console.log(Math.min(1, 312, 634, 10384977628348234, 0.23491, 12.9274, 13))
// და ორივე დაბეჭდე.

// 3)
// მომხმარებელს შემოატანინე რიცხვი.
// გამოიტანე:

// ამ რიცხვის კვადრატი (ანუ საკუთარ თავზე გამრავლებული)
// ამ რიცხვის ფესვი
let user1 = prompt('enter diddy blud')
console.log(Math.pow(user1, 2))
console.log(Math.sqrt(user1))
// 4)
// მომხმარებელს შემოატანინე ათწილადი რიცხვი (მაგ: 7.8).
// გამოიტანე ეს რიცხვი ისე, რომ ათწილადი ნაწილი მოიშალოს და დარჩეს ქვედა მთელი რიცხვი.
let user2 = prompt('enter diddy blud')
console.log(Number(String(user2[-1])))
// 5)
// დააგენერირე შემთხვევითი რიცხვი 1-დან 100-მდე.
// ყოველ გაშვებაზე უნდა იყოს განსხვავებული.
console.log(Math.random() * 100)
// 6)
// კომპიუტერმა შემთხვევითად აირჩიოს რიცხვი 1-დან 10-მდე.
// მომხმარებელმა უნდა შეიყვანოს თავისი ვარაუდი.
// თუ სწორად გამოიცნო — დაწერე "სწორია".
// თუ ვერ გამოიცნო — დაწერე "არასწორია".
let user3 = prompt('enter diddy blud')
let random = Math.round(Math.random() * 10)
let attempts = 3
while(attempts > 0){
    if(user3 === random){
        console.log("სწორია")
        break
    }else{
        console.log("არასწორია")
        console.log(`u got ${attempts} attempts left.`)
        user3 = prompt('enter diddy blud')
        attempts--
    }
    
    if(attempts === 0){
        console.log(`you lose the number was: ${random}`)
        break
    }
}