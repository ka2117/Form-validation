function validateform(){
    let fnameregex = /^[A-Za-z\s'-]+$/ //allows the name with apostrophe (eg)'o'Brien
    let lnameregex = /^[A-Za-z\s'-]+$/
    let mailregex = /^[A-Za-z^\s^@!#%&]+@[A-Za-z]+\.[a-z]+$/
    let phoneregex = /^\d{10}$/
    let passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#$%^&]).{8,}$/ 
    /* Allowing atleast one lowercase, uppercase,one special character,one digit,atleat 8 characters*/
    //. - in passwordregex matches any character
    let firstname= document.getElementById('firstname').value 
    let lastname= document.getElementById('lastname').value 
    let email = document.getElementById('email').value 
    let mobileno = document.getElementById('mobilenumber').value
    let password = document.getElementById('password').value
    
    if(firstname.trim()=== ''){
        document.getElementById('firstnameerror').textContent = "firstname cannot be empty"
        return false
    }
    else if(!fnameregex.test(firstname)){
        document.getElementById('firstnameerror').textContent = "invalid firstname"
        return false
    }
    else{
        document.getElementById('firstnameerror').textContent = ""
         document.getElementById('firstname').value = firstname
    }
    if(lastname.trim()===''){
        document.getElementById('lastnameerror').textContent = 'lastname cannot be empty'
    }
    else if(!lnameregex.test(lastname)){
        document.getElementById('lastnameerror').textContent = 'invalid lastname'
        return false
    }
    else{
        document.getElementById('lastnameerror').textContent = ''
        document.getElementById('lastname').value = lastname
    }
    if(!mailregex.test(email)){
       document.getElementById('emailerror').textContent = 'Enter valid email id'
       return false
    }
    else{
        document.getElementById('emailerror').textContent = ''
        document.getElementById('email').value = email
    }
    if(!passregex.test(password)){
        document.getElementById('passworderror').textContent = 'Enter valid email id'
        return false
    }
    else{
        document.getElementById('password').value = password
    }
    if(!phoneregex.test(mobileno)){
        document.getElementById('numbererror').textContent = 'enter valid mobile number'
        return false
    }
    else{
        document.getElementById('numbererror').textContent = ''
        document.getElementById('mobilenumber').value = mobileno
    }
    
}