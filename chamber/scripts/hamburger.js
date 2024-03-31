const hamButton = document.querySelector('#hamburger-menu');
const navElement = document.querySelector('.navigation');
const joinUsButton = document.querySelector('.book'); // Selecciona el botón "Join Us"

hamButton.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamButton.classList.toggle('open');

    // Agrega o quita la clase 'hidden' al botón "Join Us" cuando se hace clic en el botón hamburguesa
    joinUsButton.classList.toggle('hidden');
});
