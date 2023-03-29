const email = document.querySelector('#email');



const button = document.querySelector('#submit');
const validateEmail= (email) => {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}


button.addEventListener('click',(event)=>{
    event.preventDefault()
    if(!validateEmail(email.value)){
        document.getElementById("error-text").style.display="block"
        document.getElementById("email").style.borderColor="red"
        document.getElementById("error-sign").style.display="block"
    }else {
        document.getElementById("email").style.borderColor="#CE9898"
        document.getElementById("error-text").style.display="none"
        document.getElementById("error-sign").style.display="none"
        
    }
})