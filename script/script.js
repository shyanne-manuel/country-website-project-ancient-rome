// Script for hamburger menu

const hamMenu = document.getElementById("ham-menu");
const navBarMenu = document.getElementById("nav-bar-menu");

hamMenu.addEventListener("click", function (){
    hamMenu.classList.toggle("active");
    navBarMenu.classList.toggle("active");


})