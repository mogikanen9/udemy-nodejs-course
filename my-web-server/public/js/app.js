console.log('Client side js...');

function getWeather(location, callback) {
    fetch('/weather?location='+location)
        .then(response => response.json())
        .then(data => {console.log(data); callback(data)});
}

