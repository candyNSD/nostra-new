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
// contact Page

var submit = document.querySelector("#subBtn")

submit.addEventListener("click", (event) => {
    event.preventDefault(); 

    var nameRegEx = /^[a-zA-Z]+$/;
    var emailRegEx =  /^[a-zA-Z0-9]+@gmail\.com/; 

    var name = document.getElementById("name");
    var email = document.getElementById("email");

    var isValid = true;
    
    if (!nameRegEx.test(name.value)) {
        document.querySelector(".nameError").style.display = "inline";
        isValid = false;
    } else {
        document.querySelector(".nameError").style.display = "none";
    }

    if (!emailRegEx.test(email.value)) {
        document.querySelector(".emailError").style.display = "inline";
        isValid = false;
    } else {
        document.querySelector(".emailError").style.display = "none";
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});