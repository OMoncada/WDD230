const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // temporary testing of data retrieval
    // console.table(data.prophets);
    // need to reference the prophets array of the JSON data object, not just the JSON data object
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elmements for each card
        // Reference for createElement(): https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let birthDate = document.createElement("div");
        let birthPlace = document.createElement("div");

        // Build the full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Build birth date
        birthDate.innerHTML = `Date of Birth: ${prophet.birthdate}`;

        // Build birth place
        birthPlace.innerHTML = `Place of Birth: ${prophet.birthplace}`;

        // Build the image portrait
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        // Add the full name heading and image elements to the section element named card
        // Reference for appendChild(): https://developer.mozilla.org/en-US/docs/Web/API/Element/append
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        // Append the section nameed card to the id of cards which we named cards
        cards.appendChild(card);
    });
}

// let results = null;

// async function getProphetData(url) {
//     const response = await fetch(url);
//     // check to see if the fetch was successful
//     if (response.ok) {
//         // The API will send us JSON...but we have to convert the
//         // response before we can use it.
//         // .json() also returns a promise...so we await it as well.
//         const data = await response.json();
//         doStuff(data);
//     }
// }

// function doStuff(data) {
//     results = data;
//     console.log("first: ", results);
// }

// getProphetData(url);
// console.log("second: ", results);