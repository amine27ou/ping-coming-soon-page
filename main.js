let email = document.querySelector("#email");
let inptFld = document.querySelector(".input-field");
let submit = document.querySelector("#submit");
let errorMsg = document.querySelector(".error-msg");

submit.addEventListener("click",function(){
    let emailValue=email.value;
    if(!emailValue.match(/^\S+@\S+\.[A-Za-z]{2,}$/)){
        email.classList.add("error");
        errorMsg.classList.add("error");
        console.log("error");
    }
    else{
        email.classList.remove("error");
        errorMsg.classList.remove("error");

    }
})