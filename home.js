const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-item");
const links = document.querySelectorAll(".nav-item li");

hamburger.addEventListener('click', () =>{
    navLinks.classList.toggle('open');
})