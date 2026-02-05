let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newnums = nums.map((num, index) => `num: ${num}, index: ${index}, sum: ${num+index}`)

console.log(newnums)



// filtri afiltrebs magalitad igebs siidan kent ricxvebs. mapi aris igive for lupi

let nummms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
let filtri = nummms.filter((num) => {
    if (num > 10){
        return true
    }else{
        return false
    }
})

console.log(filtri)

let names = ['ana', 'beka', 'giorgi', 'davit', 'elene']
let filterNames = names.filter((name) => {
    if (name.split('').reverse().join('') === name){
        return true
    }else{
        return false
    }
})

console.log(filterNames)
