const userContainer = document.querySelector('#user-info')

const registerForm = document.querySelector('#register-form')

const baseURL = `http://localhost:2000/api`


const register = body => axios.post(`${baseURL}/register`, body).then(res => {
  createUserCard(res.data)
}).catch(err => {
  console.log(err)
  alert('Uh oh. Your request did not work.')
})


function registerSubmitHandler(e) {
  e.preventDefault()

  let email = document.querySelector('#register-email')
  let firstName = document.querySelector('#register-firstName')
  let lastName = document.querySelector('#register-lastName')
  let password = document.querySelector('#register-password')
  let password2 = document.querySelector('#register-password-2')

  if (password.value !== password2.value) {
    alert("Your passwords need to match.")
    return
  }

  let bodyObj = {
      
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
      password: password.value
  }

  register(bodyObj)

  email.value = ''
  firstName.value = ''
  lastName.value = ''
  password.value = ''
  password2.value = ''
}

function createUserCard(data) {
    userContainer.innerHTML = ''
    const userCard = document.createElement('div')
    userCard.classList.add('user-card')

    userCard.innerHTML = `<p class="username">Account for: ${data.email}, has been created</p>`


    userContainer.appendChild(userCard)
}


registerForm.addEventListener('submit', registerSubmitHandler)