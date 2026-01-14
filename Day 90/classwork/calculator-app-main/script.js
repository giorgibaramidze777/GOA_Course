let text = document.getElementById('text')
let texts = ''
function reset(){
    texts = ''
    text.textContent = ''
}
function addNumber(num){
   texts+=num
   text.textContent = texts
}

function deletes(){
    texts = texts.slice(0,-1)  
    text.textContent = texts || 0
}
document.getElementById('seven').onclick = () =>{
    addNumber('7')
}
document.getElementById('eight').onclick = () =>{
    addNumber('8')
}
document.getElementById('nine').onclick = () =>{
    addNumber('9')
}
document.getElementById('DEL').addEventListener('click', deletes)
document.getElementById('four').onclick = () =>{
    addNumber('4')
}
document.getElementById('five').onclick = () =>{
    addNumber('5')
}
document.getElementById('six').onclick = () =>{
    addNumber('6')
}
document.getElementById('plus').onclick = () =>{
    addNumber('+')
}
document.getElementById('one').onclick = () =>{
    addNumber('1')
}
document.getElementById('two').onclick = () =>{
    addNumber('2')
}
document.getElementById('three').onclick = () =>{
    addNumber('3')
}
document.getElementById('minus').onclick = () =>{
    addNumber('-')
}
document.getElementById('dot').onclick = () =>{
    addNumber('.')
}
document.getElementById('zero').onclick = () =>{
    addNumber('0')
}
document.getElementById('divide').onclick = () =>{
    addNumber('/')
}
document.getElementById('multiply').onclick = () =>{
    addNumber('*')
}
document.getElementById('RESET').addEventListener('click', reset)
document.getElementById('equal').onclick = () => {
    const result = eval(texts)
    text.textContent = result
    texts = String(result)
}

