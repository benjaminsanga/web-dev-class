const form = document.getElementsByTagName('form')[0]
const username = document.getElementById('username')
const password = document.getElementById('password')
const loginState = document.getElementById('login-state')
const loginForm = document.getElementById('login-form')
const loginSuccess = document.getElementById('login-success')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  // get username and password
  const user = username.value
  const pwd = password.value
  
  // get data from db
  // username => admin
  // password => 12345678

  if (user !== 'admin') {
    loginState.textContent = 'Username is invalid.'
    return
  }

  if (pwd !== '12345678') {
    loginState.textContent = 'Wrong password!'
    return
  }

  if (user === 'admin' && pwd === '12345678') {
    // loginState.textContent = 'Login Successful!'
    loginForm.style.display = 'none'
    loginSuccess.style.display = 'block'
  }

})


const closeBtn = document.getElementById('close')
const content = document.getElementById('content')

closeBtn.addEventListener('click', (event) => {
  event.preventDefault()

  loginSuccess.style.display = 'none'
  content.style.display = 'block'
})