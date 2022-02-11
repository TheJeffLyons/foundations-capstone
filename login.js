const userContainer = document.querySelector('#user-info')
const loginForm = document.querySelector('#login-form')
var session;


const baseURL = `http://localhost:2000/api/login`

const login = body => axios.post(`${baseURL}`, body).then( res =>{
    window.location.replace(`./profile.html`)
})


function loginSubmitHandler(e) {
    e.preventDefault()

    let email = document.querySelector('#textBox-1')
    let password = document.querySelector('#textBox-2')

    let bodyObj = {
        email: email.value,
        password: password.value
    }

    login(bodyObj)

    email.value = ''
    password.value = ''
    
}

loginForm.addEventListener('submit', loginSubmitHandler)
