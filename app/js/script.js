const btnHamburger = document.getElementById('btnHamburger');
const body = document.querySelector("body")
const header = document.querySelector(".header");
const overlay  = document.querySelector(".overlay");
const  fadeIn = document.querySelector(".fade-in");
const  fadeOut = document.querySelector(".fade-out");
const fadeElems = document.querySelectorAll(".has-fade");


btnHamburger.addEventListener("click", open)

function open(){
    // console.log("open  Hamburger")
    if(header.classList.contains("header__open")){
        body.classList.remove("noscroll");
        header.classList.remove("header__open");
        // overlay.style.display="none";
        fadeElems.forEach(function(element)
        {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })
        // overlay.classList.add("fadeOut");
    }
    else
    {
        body.classList.add("noscroll");
        header.classList.add("header__open");
        // overlay.style.display="block";
        fadeElems.forEach(function(element)
        {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })
        
        
    }
}