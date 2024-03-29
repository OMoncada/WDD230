const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const cardsDarkMode = document.querySelectorAll(".card");
const navigationListItems = document.querySelectorAll('ul.navigation li');

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌙")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = "🌞";

        cardsDarkMode.forEach(card => {
            card.classList.toggle('card-dark-mode');
        });

        navigationListItems.forEach(li => {
            li.classList.toggle('li-dark-mode');
        });

    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = "🌙";

        cardsDarkMode.forEach(card => {
            card.classList.toggle('card-dark-mode');
        });

        navigationListItems.forEach(li => {
            li.classList.toggle('li-dark-mode');
        });
    }
});