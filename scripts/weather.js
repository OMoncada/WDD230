
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#weather-description');

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-39.82&lon=-73.23&appid=9b1853ee6128b033b79c956d2489a5c2&units=metric';

async function apiFetch(weatherUrl) {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.test());
        }
    }
    catch (err) {
        console.log(err);
    }
}

apiFetch(weatherUrl);

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    weatherDesc.innerHTML = desc;
}   
