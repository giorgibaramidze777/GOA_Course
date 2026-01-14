let usname = prompt('enter ur name');
// usname === "davit" ? console.log("controller") : usname === "aleksandre" ? console.log('mentor(very good mentor)') : console.log("i dont know ternary");

switch (usname) {
    case "davit":
        console.log("controller")
        break
    case 'aleksandre':
        console.log('mentor(very good mentor)')
        break
    default:
        console.log("i dont know ternary")
}