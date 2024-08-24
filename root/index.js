const form =  document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const email_input = document.getElementById('email_input')
const password_input = document.getElementById('password_input')
const repeat_password_input = document.getElementById('repeat_password_input')
const error_message = document.getElementById('error_message')

form.addEventListener('submit', (e) => {

    let errors = []
    
    if(firstname_input){
        errors = getSignupFormsErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value)
    }
    else{
        errors = getLoginFormsErrors(email_input.value, password_input.value)
    }
    if(errors.length > 0){
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
})

function getSignupFormsErrors(firstname, email, password, repeatPassword){
    let errors = []

    if(firstname ==='' || firstname == null){
        errors.push('Firstname is required')
        firstname_input.parentElement.classList.add('incorrect')
    }
    if(email ==='' || email == null){
        errors.push('Email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password ==='' || password == null){
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }

    return errors
}