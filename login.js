//Offer Box

var closeoffer = document.querySelector(".closeoffer")
var offerWrapper = document.querySelector(".offerWrapper")

closeoffer.addEventListener("click",()=>{
    offerWrapper.style.display = "none"
})

// Side Bar

var navWrapper = document.querySelector(".navWrapper-mob")
var menuIcon = document.querySelector("#menuIcon")
var closeNav = document.querySelector("#closeNav")

menuIcon.addEventListener("click",()=>{
    navWrapper.style.right = 0;
})
closeNav.addEventListener("click",()=>{
    navWrapper.style.right = "-50%";
})

// login

var loginBtn = document.querySelector(".loginBtn")
var email =document.getElementById("email")
var pass =document.getElementById("pass")

loginBtn.addEventListener("click",()=>{
    event.preventDefault();

    var emailRegEx =  /^[a-zA-Z0-9]+@gmail\.com/; 
    var passRegEx = /^[a-zA-Z0-9]/

    var isValid = true;

    if(!emailRegEx.test(email.value)) {
        document.querySelector(".emailError").style.display = "inline";
        isValid = false;
    }
    if(!passRegEx.test(pass.value)) {
        document.querySelector(".passError").style.display = "inline";
        isValid = false;
    }
    loginLink = document.getElementById('loginbtn');
    if(isValid) {
        loginLink.href = 'index.html';
    }
})
