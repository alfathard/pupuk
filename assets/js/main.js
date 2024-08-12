$(document).ready(function (){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrollTop);
})

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function autoScroll(element){
    $('html,body').animate({
        scrollTop: element}, 'slow');
}