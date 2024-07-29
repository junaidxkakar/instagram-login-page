function ogin(){
    let email = document.getElementById('email').value
    localStorage.setItem("email",email)
    let password = document.getElementById('password').value
    localStorage.setItem("password",password)
    location.href='https://web.facebook.com/'
}