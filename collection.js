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
//checkBox
var check = document.getElementsByName("check");
var productList = document.querySelector(".productList");
var products = productList.querySelectorAll(".product");

check.forEach(checkbox => {
    checkbox.addEventListener("click", (event) => {
        let collection = [];
        check.forEach((cb, index) => {
            if (cb.checked) {
                collection.push(cb.value);
            }
        });
        products.forEach(product => {
            let span = product.querySelector("span");
            let details = span.textContent.split(",");
            let isVisible = collection.every(item => details.includes(item));
            product.style.display = isVisible ? "block" : "none";
        });
    });
});

// search
var searchInput = document.querySelector("#search")

var productList = document.querySelector(".productList")
var products =productList.querySelectorAll(".product")


searchInput.addEventListener("keyup",()=>{
    var enteredValue = event.target.value.toUpperCase()
    for(count=0; count<products.length;count++) {
        if(products[count].textContent.toUpperCase().indexOf(enteredValue)<0){
            products[count].style.display = "none";
        } else {
            products[count].style.display = "block";
        }
    }
})


