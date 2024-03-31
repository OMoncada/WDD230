function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue("populationCount", 314550, 314623, 1500);
animateValue("areaCount", 18350, 18430, 1500);
animateValue("populationDensityCount", 3200, 3272, 1500)
animateValue("unemploymentRateCount", 0, 9, 1500)
animateValue("povertyIndexCount", 0, 16, 1500)