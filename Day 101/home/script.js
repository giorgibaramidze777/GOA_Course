// 1)შექმენით სახელების სია, სადაც ბევრი სახელი იქნება ჩაშენებული, შემდეგ გაფილტრეთ ეს სია ისე რომ დარჩეს მარტო ისეთი სახელები რომლებიც იწყება a ზე და მთავრდება a ზე (მაგალითად ana, anamaria, axtona)
let names = ['ana', 'giorgi', 'diana', 'dima', 'marine', 'jamshuti', 'axmedi', 'jambuli']
let filternames = names.filter((name) => {
    if (name[0] === 'a' && name[name.length - 1] === 'a'){
        return true
    }else{
        return false
    }
})
console.log(filternames)
// 2)შექმენით სახელების და რიცხვების სია, შემდეგ გაფილტრეთ ეს სია ისე რომ დარჩეს მარტო კენტ ინდექსზე მდგომი სტრინგები და კენტი რიცხვები
let dd = ['ana', 'giorgi', 'diana', 'dima', 'marine', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let filterdd = dd.filter((element, index) => {
    if (element % 2 !== 0 && index % 2 !== 0){
        return true
    }else{
        return false
    }
})

console.log(filterdd)
// 3)შექმენით რიცხვების სია, შემდეგ მარტო ლუწ ინდექსზე მდგომი ელემენტები დატოვეთ ფილტრაციით
let idkman = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let idkfilter = idkman.filter((element, index) => {
    if (index % 2 === 0){
        return true
    }else{
        return false
    }
})

console.log(idkfilter)
// 4)მოიძიეთ არის თუარა იგივე მეთოდები javascript ში (filter, map), რა განსხვავებაა პითონისა და js ის ამ ორ მეთოდს შორის
//kai gavitvaliswineb chemo dzmao
// 5)sololearn ბოლო თავის წინა თავამდე
// nuh uh