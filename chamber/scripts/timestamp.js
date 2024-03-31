// Function to set the current date and time
function setTimestamp() {
    var now = new Date();
    var timestampField = document.getElementById("timestamp");

    var formattedTimestamp =
        now.getFullYear() +
        "-" +
        ("0" + (now.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + now.getDate()).slice(-2) +
        " " +
        ("0" + now.getHours()).slice(-2) +
        ":" +
        ("0" + now.getMinutes()).slice(-2) +
        ":" +
        ("0" + now.getSeconds()).slice(-2);

    timestampField.value = formattedTimestamp;
}

window.onload = setTimestamp;
