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

// slider Box

let currentSlide = 0;
        const slides = document.querySelectorAll('.sliderWrapper');
        const dots = document.querySelectorAll('.dot');
        const prevBtn = document.querySelector('.fa-caret-left')
        const NextBtn = document.querySelector('.fa-caret-right')


        function showSlide(n) {
            slides.forEach(slide => slide.style.display = "none");
            dots.forEach(dot => dot.classList.remove("active"));
            slides[n].style.display = "block";
            dots[n].classList.add("active");
        }
        
        prevBtn.addEventListener('click', () =>{
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });
        NextBtn.addEventListener('click', () =>{
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
        
        // Initialize the first slide
        showSlide(currentSlide);

var borderWish = document.querySelectorAll(".borderWish");
var redwish = document.querySelectorAll(".redwish");

for (var i = 0; i < borderWish.length; i++) {
    (function(index) {
        borderWish[index].addEventListener("click", () => {
            if (redwish[index].style.display === "none" || redwish[index].style.display === "") {
                redwish[index].style.display = "block";
            } else {
                redwish[index].remove(redwish[index]);
             }
        });
    })(i);
}

for (var i = 0; i < redwish.length; i++) {
    (function(index) {
        redwish[index].addEventListener("click", () => {
            if (redwish[index].style.display === "block") {
                redwish[index].style.display = "none";
            } 
        });
    })(i);
}
