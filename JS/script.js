const mobileMenu = document.querySelector(".menu__list");
const mobileMenuButton = document.querySelector(".menu__button");
const slider = document.querySelector(".slider")
let sliderSection = document.querySelectorAll(".slider__section")
let sliderSectionLast = sliderSection[sliderSection.length -1]
const btnLeft = document.querySelector(".slider__btn--left")
const btnRight = document.querySelector(".slider__btn--right")

mobileMenuButton.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu(){
    mobileMenu.classList.toggle("active")
}

slider.insertAdjacentElement("afterbegin", sliderSectionLast)

function nextSliderBtn(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function backSliderBtn(){
    let sliderSection = document.querySelectorAll(".slider__section")
    let sliderSectionLast = sliderSection[sliderSection.length -1]
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast)
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener("click", function(){
    nextSliderBtn();
});

btnLeft.addEventListener("click", function(){
    backSliderBtn();
});

setInterval(function(){
    nextSliderBtn()
},4500)