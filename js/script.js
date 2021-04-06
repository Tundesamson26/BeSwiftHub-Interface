var toggle = document.querySelector('.toggle');
var navbar = document.querySelector('.navbar');

toggle.addEventListener("click", function(){
    toggle.classList.toggle("active");
    navbar.classList.toggle("active");
});