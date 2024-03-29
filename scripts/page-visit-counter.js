// References for how to build page visit counter:
// https://byui-cse.github.io/wdd230-course/lesson07/aa-course-homepage-07.html
// https://codepen.io/blazzard-jason/pen/RwyePNj

const visitsDisplay = document.querySelector('.visits');

let numberOfVisits = Number(window.localStorage.getItem("numberOfVisitsIs")) || 0;

if (numberOfVisits !== 0) {
    visitsDisplay.textContent = numberOfVisits;
}
else {
    visitsDisplay.textContent = 'Welcome, this is your first visit! 🚂';
}

numberOfVisits++;

localStorage.setItem('numberOfVisitsIs', numberOfVisits);