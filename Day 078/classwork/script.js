document.getElementsByClassName('but')[0].onclick = function() {
    let cat = 'abcdef0123456789'
    let res = '#'
    let span = document.getElementsByTagName('span')
    let h2 = document.getElementById('h2')
    let body = document.body
    for (let i = 0; i < 6; i++) {
        res += cat[Math.floor(Math.random()*cat.length)]
    }
    span[0].style.color = res
    span[0].textContent = res
    body.style.background = res 
}
