const hamButton = document.querySelector('#hamburger-menu');
const navElement = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navElement.classList.toggle('open');
	hamButton.classList.toggle('open');
});

