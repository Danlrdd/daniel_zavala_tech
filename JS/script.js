const mobileMenu = document.querySelector(".menu__list")
const mobileMenuButton = document.querySelector(".menu__button")

mobileMenuButton.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu(){
    mobileMenu.classList.toggle("active")
}