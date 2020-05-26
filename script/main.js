console.log('Hello world!');
// меню
const leftMenu = document.querySelector('.left-menu')
const hamburger = document.querySelector('.hamburger')
//карты фильмов
const videos = document.querySelectorAll('img.tv-card__img');

//по клику иконки меню (Гамбургера) открываем боковое меню, добавляя классы 
hamburger.addEventListener('click', () => {
    leftMenu.classList.toggle('openMenu')
    hamburger.classList.toggle('open')
})

//по клику вне бокового меню закрываем меню, убирая классы 
document.addEventListener('click', (event) => {
    if (!event.target.closest('.left-menu')) {
        leftMenu.classList.remove('openMenu')
        hamburger.classList.remove('open')
    }
})

leftMenu.addEventListener('click', (event) => {
    const target = event.target
    const dropdown = target.closest('.dropdown')
    if (dropdown) {
        dropdown.classList.toggle('active')
        leftMenu.classList.add('openMenu')
        hamburger.classList.add('open')
    }
})


videos.forEach(elem => {
    let src = elem.src;
    console.log(src);
    let backdrop = elem.getAttribute('data-backdrop');
    console.log(backdrop);
    elem.addEventListener('mouseover', () => elem.src = backdrop);
    elem.addEventListener('mouseout', () => elem.src = src);
});