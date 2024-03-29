const date = new Date();
let year = date.getFullYear();
document.querySelector('#currentyear').textContent = year;

const lastmodified = document.lastModified;
document.querySelector('#lastmodified').textContent = lastmodified;
