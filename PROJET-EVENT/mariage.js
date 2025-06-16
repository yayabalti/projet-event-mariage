
// _____________________CARROUSSEL___________________

const buttons = document.querySelectorAll(".btnn");
const slides = document.querySelectorAll(".slide");

// Tableau d'images [0, 1, 2, ...]

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
    const calcNextSlide = e.target.id === "next" ? 1 : -1;  
    const slideActive = document.querySelector(".active");

    newIndex = calcNextSlide + [...slides].indexOf(slideActive);

    if (newIndex < 0) newIndex = [...slides].length -1;
    if (newIndex >= [...slides].length) newIndex = [0];
    slides[newIndex].classList.add("active");

    slideActive.classList.remove("active");
  });
})


//_________________________MENU BURGER___________________________________________


const burgerMenuButton = document.querySelector('.burger-menu-button')
const burgerMenuButtonIcon = document.querySelector('.burger-menu-button i')
const burgerMenu = document.querySelector('.burger-menu')

burgerMenuButton.onclick = function () {
    burgerMenu.classList.toggle('open')
    const isOpen = burgerMenu.classList.contains('open')
    burgerMenuButtonIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}


