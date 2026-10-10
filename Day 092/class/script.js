let form = document.getElementById('form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    let email = document.getElementById('email')
    let pass = document.getElementById('password')
    if (email.value === ''){
        email.style.border = "1px solid red"
    }else {
        email.style.border = "none"
    }
    if (pass.value === ''){
        pass.style.border = "1px solid red"
    }else {
        pass.style.border = "none"
    }
    if (email.value !== '' && pass.value !== '') {
        email.value = ''
        password.value = ''
    }
})