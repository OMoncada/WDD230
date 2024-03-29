const date = new Date();
let year = date.getFullYear();
document.querySelector('#currentyear').textContent = year;

const lastmodified = document.lastModified;
document.querySelector('#lastmodified').textContent = lastmodified;

const hamButton = document.querySelector('#hamburger-menu');
const navElement = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamButton.classList.toggle('open');
});