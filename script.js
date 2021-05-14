const header = document.querySelector('header');
const menuToggle = document.querySelector('.toggle')
const menu = document.querySelector('.menu')
const listItems = document.querySelectorAll('.menu li')


window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 0);

})

function toggleMenu() {
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
}

for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', toggleMenu)
};

menuToggle.addEventListener('click', toggleMenu);
