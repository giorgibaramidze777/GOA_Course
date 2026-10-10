function yeah(shota) {
    return shota.toUpperCase() + shota.indexOf('A');
}
console.log(yeah('shota'));

function y(bla) {
    let newBla = []
    for (let i of bla) {
        if (typeof i == "string") {
            newBla.push(i.toUpperCase());
        }
    }
}