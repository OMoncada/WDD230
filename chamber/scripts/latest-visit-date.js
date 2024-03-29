// Reference: https://codepen.io/blazzard-jason/pen/WNZvOEK
// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
// 1000 * 60 * 60 * 24 = 86,400,000 ms in 1 day
const msIn1Day = 86400000;

const dateToday = new Date();
// Reference for Date Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
// For testing purposes:
//const dateToday = new Date('February 24, 2024 01:24:00');

const visitMessage = document.querySelector('#visitMessage');

let latestVisitDate = new Date(window.localStorage.getItem("latestVisitDate")) || 0;

let daysSinceLastVisit = (dateToday - latestVisitDate) / msIn1Day;

if (daysSinceLastVisit >= 2) {
    visitMessage.textContent = `You last visited ${daysSinceLastVisit.toFixed(0)} days ago.`;
}
else if (daysSinceLastVisit >= 1) {
    visitMessage.textContent = `You last visited ${daysSinceLastVisit.toFixed(0)} day ago.`;
}
else if (daysSinceLastVisit >= 0) {
    visitMessage.textContent = 'Back so soon! Awesome!';
}
else {
    visitMessage.textContent = 'Welcome! This is your first time. Let us know if you have any questions.';
}

latestVisitDate = dateToday;

localStorage.setItem('latestVisitDate', latestVisitDate);

