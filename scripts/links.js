const url = "https://omoncada.github.io/wdd230/data/links.json";
const activities = document.querySelector("#menu-activities");

async function getLinks(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  displayLinks(data.weeks);
}

getLinks(url);

const displayLinks = (weeks) => {
  weeks.forEach((week) => {
    let menuOption = document.createElement('li');
    menuOption.textContent = week.week;

    week.links.forEach((link) => {
      let menuLink = document.createElement('a');
      menuLink.href = link.url;
      menuLink.textContent = link.title;
      menuOption.appendChild(menuLink);
      menuOption.append(" | ");
    });

    activities.appendChild(menuOption);
  });
}