// References on how to generate the year:
// https://byui-cse.github.io/wdd230-course/lesson01/applied-javascript.html
// https://codepen.io/blazzard-jason/pen/LYrqxGJ
// https://codepen.io/DallinS/pen/OJqbrZL
const copyrightYear = {
    year: "numeric"
};

document.querySelector('footer #year').textContent = new Date().toLocaleDateString("en-US", copyrightYear);

// References to show the date and time the document was last modified
// https://www.tutorialspoint.com/How-to-show-the-date-and-time-the-document-was-last-modified-with-JavaScript
// https://developer.mozilla.org/en-US/docs/Web/API/Document/lastModified
let lastModificationDate = document.lastModified;

document.querySelector('#lastModified').innerHTML = `Last Modification: ${lastModificationDate}`;